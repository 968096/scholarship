# Dockerfile alternativo que se posiciona diretamente na pasta backend o pom.xml
FROM maven:3.8.5-openjdk-11-slim AS build
# Definimos /app/backend como diretório de trabalho
WORKDIR /app/backendl explicitamente primeiro
# Copiamos todo o conteúdo da pasta backend para /app/backend
COPY ./backend/ .# Copia o restante do projeto backend
# Executamos o build Maven na pasta que já contém o pom.xmlsrc/
RUN mvn clean package -DskipTestsnd/system.properties /app/

FROM openjdk:11-jre-sliman package -DskipTests
WORKDIR /app
COPY --from=build /app/backend/target/scholarship-dashboard-0.0.1-SNAPSHOT.jar app.jarFROM openjdk:11-jre-slim



ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]EXPOSE 8080WORKDIR /app
COPY --from=build /app/target/scholarship-dashboard-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
