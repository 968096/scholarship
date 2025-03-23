# Build stage
FROM maven:3.8.5-openjdk-11-slim AS build

# Definir diretório de trabalho
WORKDIR /app

# Primeiro, copiar apenas o pom.xml do backend
COPY backend/pom.xml ./pom.xml

# Executar o download das dependências (isso será em cache se o pom.xml não mudar)
RUN mvn dependency:go-offline -B

# Copiar o código-fonte e outros arquivos necessários
COPY backend/src ./src
COPY backend/system.properties ./system.properties

# Comando de diagnóstico para verificar se o pom.xml foi copiado corretamente
RUN echo "Conteúdo do diretório atual:" && ls -la

# Compilar o projeto
RUN mvn clean package -DskipTests

# Stage de execução
FROM openjdk:11-jre-slim

WORKDIR /app

# Copiar o JAR do estágio de build
COPY --from=build /app/target/scholarship-dashboard-0.0.1-SNAPSHOT.jar ./app.jar

# Expor a porta que o serviço usará
EXPOSE 8080

# Comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
