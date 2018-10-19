package com.revature.controllerTests;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.rideforce.user.UserApplication;
import com.revature.rideforce.user.beans.User;
import com.revature.rideforce.user.beans.UserRegistrationInfo;
import com.revature.rideforce.user.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserApplication.class)
@AutoConfigureMockMvc
public class UserControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private UserRepository userRepository;
	
	@Test
	public void loggedOutUserFindByWeirdCaseEmailShouldWork() throws Exception
	{ 							//so to put parameters in get request url, it's a ? not a /   !!!!
		this.mockMvc.perform(get("/users?email=adMIN@REVature.com")).andExpect(status().is2xxSuccessful());
	}
	
	@Test()
	public void loggedOutUserCantDeleteAccount() throws Exception
	{
		this.mockMvc.perform(delete("/users/1")).andExpect(status().isForbidden()); //should be forbidden since not logged in
			//throws PermissionDeniedException
	}
	
	@Transactional   //"mock" mvc still actually delete
	@Test
	public void loggedInAdminUserCanDeleteAccount() throws Exception
	{
		User admin = userRepository.findById(1); //unfortunately have to get a user
		SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(admin, "password", admin.getAuthorities()));
		this.mockMvc.perform(delete("/users/1")).andExpect(status().is2xxSuccessful());
		SecurityContextHolder.getContext().setAuthentication(null);
		
	}
}
