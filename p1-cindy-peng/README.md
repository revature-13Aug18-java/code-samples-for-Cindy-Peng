# P1 Expense Reimbursement System
Original project is available on Github at https://github.com/cclpeng/RevatureP1.

The Expense Reimbursement System (ERS) application allows the employees 
and managers of a company to manage reimbursement requests. Employees 
that log in may request reimbursements or look at their previous history 
or requests, while managers while logged in may approve or reject 
reimbursements. 

- Servlets, Java, JavaScript, HTML, CSS, JDBC, SQL, AJAX, Bootstrap, 
RDS, Apache Tomcat, Git, Maven.
- Packaged as a war with deployment descriptor web.xml.
- Tomcat web server hosted the application.
- Used Java's HttpSession to maintain a user's session and keep some web 
pages more secure.
- Singleton design pattern use of Java's java.sql.Connection interface 
to 
create a session with the database.
- Created servlets to handle processing web pages using Java's Servlet 
API.
- Made AJAX calls in JavaScript  to populate HTML pages dynamically with 
information from servlet views.
- Implemented Front Controller design pattern with a request helper to 
help redirect to the correct view from the login page.
- Incorporated Bootstrap to style  HTML views.
- Used Oracle JDBC to make a DAO layer handling data logic. 
- Utilized Log4J as a logger to implement good coding practice.
- Checked code quality with SonarCloud through Maven.
