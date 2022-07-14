FROM openjdk:8
ADD target/benchmark-ms.jar benchmark-ms.jar
EXPOSE 8250
ENTRYPOINT ["java","-jar","/benchmark-ms.jar"]