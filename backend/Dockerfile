# Use Maven with JDK 17 for building the app
FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml and download dependencies first (for caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and build (skip tests)
COPY src ./src
RUN mvn clean package -DskipTests

# Run stage: lightweight JDK image
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy the jar file from build stage (name comes from your pom config)
COPY --from=build /app/target/app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
