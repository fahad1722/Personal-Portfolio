# Step 1: Use OpenJDK base image
FROM openjdk:17-jdk-slim

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy the JAR file into the container
COPY target/*.jar email-backend-1.0.jar

# Step 4: Expose the app port
EXPOSE 8080

# Step 5: Run the JAR file
ENTRYPOINT ["java", "-jar", "email-backend-1.0.jar"]
