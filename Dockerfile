# Use a lightweight OpenJDK 18 base image
# eclipse-temurin is a trusted OpenJDK distribution
# alpine makes the image smaller in size
FROM eclipse-temurin:18-jdk-alpine

# Set working directory inside the container
# All commands will run inside /app
WORKDIR /app

# Copy the generated jar file from your local target folder
# Rename it to app.jar inside the container
COPY target/url-shortener-sb-0.0.1-SNAPSHOT.jar app.jar

# Tell Docker that the container will run on port 8080
# (Spring Boot default port)
EXPOSE 8080

# Command that runs when container starts
# This runs your Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]