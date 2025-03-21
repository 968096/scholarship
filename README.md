# Scholarship Dashboard Project

This project is a web application for managing scholarship applications, built using Angular for the frontend and Spring Boot for the backend. The application provides a dashboard for displaying scholarship data and allows users to interact with the scholarship information.

## Project Structure

The project is organized into two main directories:

- **backend**: Contains the Spring Boot application.
  - `src/main/java/com/example/scholarshipdashboard`: Java source files for the application.
  - `src/main/resources`: Configuration files and static resources.
  - `src/test/java/com/example/scholarshipdashboard`: Test files for the application.
  - `pom.xml`: Maven configuration file.

- **frontend**: Contains the Angular application.
  - `src/app`: Angular components and services.
  - `src/assets`: Static assets like images and stylesheets.
  - `src/environments`: Environment-specific settings.
  - `angular.json`: Angular CLI configuration file.
  - `package.json`: npm configuration file.
  - `tsconfig.json`: TypeScript configuration file.

## Getting Started

### Prerequisites

- Java 11 or higher
- Node.js and npm
- Maven

### Backend Setup

1. Navigate to the `backend` directory.
2. Run the following command to build the backend application:
   ```
   mvn clean install
   ```
3. Start the Spring Boot application:
   ```
   mvn spring-boot:run
   ```
4. The backend will be available at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the Angular application:
   ```
   ng serve
   ```
4. The frontend will be available at `http://localhost:4200`.

## Usage

Once both the backend and frontend are running, you can access the dashboard through your web browser. The dashboard will display scholarship data retrieved from the backend.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.