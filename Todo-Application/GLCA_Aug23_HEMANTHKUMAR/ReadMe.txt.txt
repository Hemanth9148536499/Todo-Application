-->Todo Application:
This is a Todo Application developed using React.js for the frontend and Spring Boot for the backend.

-->Features:
Add, Update, status and delete todo items
Mark todo items as complete else mark todo as incomplete

-->Requirements:
Node.js and npm
Java
Spring Boot
React.js


-->Frontend (React.js):
cd todoapp
npm install
npm i
npm start

-->Backend (Spring Boot):
cd backend
./mvnw clean install


-->Configuration:
Backend (Spring Boot)
Create an application.properties file in the backend/src/main/resources directory and set the following properties:

spring.application.name=TODO-APPP
spring.datasource.url = jdbc:mysql://localhost:3306/todo?useSSL=false
spring.datasource.username = root
spring.datasource.password = 9148

spring.jpa.properties.dialect.hibernate = org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto = update
spring.jpa.properties.hibernate.show_sql = true
spring.jpa.properties.hibernate.format_sql = true

-->Here are the steps to follow for running the Todo Application:
In the first we have to import both the applications in different environment backend code for Eclipse IDE and front code in VS code or else any other supported environment.

1.Backend Installation (Eclipse IDE):
 *Import the ‘TODO-APP’ folder located in the main folder named     ‘GLCA_Aug23_HEMANTHKUMAR’.

*After successful import, clean and update the project.

*Create the required database and update the MySQL password as specified in the application.properties file.

*Run the application on the server port mentioned in the same file.

2.Frontend Installation (VS Code or other supported environments):
*Open VS Code from your terminal using the code command.

*Navigate to the given frontend code folder (named ‘ReactApp’).

*Install the necessary dependencies by running:
-->npm install

*Start the application with:
-->npm start

This will launch the user interface for the Todo Application.
-->Running the Application:

Build and run the Spring Boot application.
The frontend development server will start at http://localhost:4000. Visit this URL in your browser to access the Todo Application.