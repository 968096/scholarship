# Este arquivo apenas redirecionará para o Dockerfile real na pasta backend
FROM maven:3.8.5-openjdk-11-slim AS build
WORKDIR /app
COPY ./backend .
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/scholarship-dashboard-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
