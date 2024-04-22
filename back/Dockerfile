FROM openjdk:17-alpine AS builder

WORKDIR /usr/src/app

COPY build.gradle gradlew settings.gradle .

COPY gradle gradle

COPY src src

RUN chmod +x gradlew

RUN ./gradlew clean bootJar

ENTRYPOINT ["java","-jar","app.jar"]