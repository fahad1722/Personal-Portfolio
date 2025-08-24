# Step 1: Build the JAR using Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Step 2: Use OpenJDK base image to run the app
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar email-backend-1.0.jar

# Step 3: Expose the app port
EXPOSE 8080

# Step 4: Run the JAR file
ENTRYPOINT ["java", "-jar", "email-backend-1.0.jar"]
