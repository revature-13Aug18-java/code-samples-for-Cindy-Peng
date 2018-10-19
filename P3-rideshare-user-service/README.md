# Project 3 RideForce - Rideshare User-Service
Original Github link can be found on https://github.com/revaturelabs/rideshare-user-service.

RideForce is a ride coordinating application for Revature company 
associates. To register an account as an associate, a registration key 
token is needed and can be given by the associate's trainer. The 
associate can register as either a driver or as a carpool rider, and 
they can search for a profile that matches their needs (similar day 
start times, batch end day, Revature location, etc.). My part in the project was to improve upon the User-Service microservice. This microservice's role was to 
represent and perform operations for user accounts.

- Microservices, Spring, DevOps, Agile, Java, Maven, Amazon Web 
Services, Git, SonarCloud.
- Added password reset controller endpoints needed from the front end 
application using Spring Security, Javax Mail, Auth0's JWT tokens, and testing the 
service and endpoints.
- Used AmazonS3 client to add endpoints and a service to store profile 
pictures sent as multipart files into the application's S3 bucket. 
Used JSR303 annotations and custom exceptions to increase password and 
email validation.
- Modularized the password encoding to be in the User object's setter 
rather than in different services. 
- Added features the front end application needed, including start 
time, account activation/deactivation/disabling, and refactored the 
update user settings endpoint.
- Wrote JavaDoc documentation for the User-Service microservice.
- Created JUnit tests for the repository, service, and controller layers
using Mockito, MockMvc, Spring Boot Test, AssertJ.
- Used ECL Emma to track code coverage and increased test code coverage to
74%.
- Analyzed code quality with SonarLint and SonarCloud.
- Participated in an Agile team environment.
- Practiced developing on Git branches and pushing to the development
branch, then merging to a master branch.
- Cooperated with DevOps team to make sure added changes integrated
well.

