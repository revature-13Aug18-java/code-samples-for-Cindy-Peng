
import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.revature.rideforce.user.exceptions.EmptyPasswordException;

@Entity
@Table(name = "USERS")
public class User implements UserDetails, Identifiable, Linkable, Serializable {
	private static final long serialVersionUID = 1L;

	@Email
	private String email;

	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(nullable = false, length = 70)
	@NotEmpty
	private String password;

	@Column(length = 255)   //255 size as requested by angular team ;)
	@Size(max = 255)
	private String bio;

	@Column(name="ACTIVE")
	@JsonProperty
	private String active = "ACTIVE"; //default, other values can be "INACTIVE" for user choosing to deactivate, or "DISABLED" for admin disabling 

	@Column(nullable = false, columnDefinition = "float default 9.0")
	@NotNull
	private float startTime;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "owner")
	@NotNull
	@Valid
	@JsonLink(CarLinkResolver.class)
	private Set<Car> cars;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
	@NotNull
	@Valid
	@JsonLink(ContactInfoLinkResolver.class)
	private Set<ContactInfo> contactInfo;
	
	public User() {
		super();
		this.role = new UserRole();
		this.office = new Office();
		this.startTime = (float) 9.0;
		this.cars = new HashSet<>();
		this.contactInfo = new HashSet<>();
	}


	public void setEmail(String email) {
		this.email = email.toLowerCase();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) throws EmptyPasswordException { 
		//changing the place to encode because this is more modular than encoding in the Application.class, updateUser controller view, and loginrecovery reset password view
		if(password.equals(""))
			throw new EmptyPasswordException();
		this.password = PasswordSecurityUtil.getPasswordEncoder().encode(password); //made the class because as a member of User, gave me errors in LoginRecoveryControllerTest...null pointer exceptions, idk
	}

	public String isActive() {  //getter..... lol bad naming
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}


	public float getStartTime() {
		return startTime;
	}

	public void setStartTime(float startTime) {
		this.startTime = startTime;
	}

}
