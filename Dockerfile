# Build stage
FROM maven:3.8.5-openjdk-11-slim AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar apenas o arquivo pom.xml primeiro
COPY backend/pom.xml .

# Baixar todas as dependências. Separar este passo permite que o Docker faça cache 
# destas dependências a menos que o pom.xml mude
RUN mvn dependency:go-offline -B

# Agora copiar o código fonte
COPY backend/src ./src

# Copiar os arquivos de propriedades do aplicativo 
COPY backend/system.properties .
COPY backend/src/main/resources/application.properties ./src/main/resources/
COPY backend/src/main/resources/application-prod.properties ./src/main/resources/
COPY backend/src/main/resources/data.sql ./src/main/resources/

# Compilar e empacotar a aplicação
RUN mvn package -DskipTests

# Stage de execução
FROM openjdk:11-jre-slim

WORKDIR /app

# Copiar o JAR do estágio de compilação
COPY --from=build /app/target/scholarship-dashboard-0.0.1-SNAPSHOT.jar app.jar

# Expor a porta que a aplicação usa
EXPOSE 8080

# Definir o comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
