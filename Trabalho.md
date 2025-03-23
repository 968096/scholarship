# RAICYCLE Data Dashboard

## Objetivo
O projeto RAICYCLE visa criar um sistema interativo para visualização e análise de dados de reciclagem e resíduos sólidos urbanos. Ele utiliza Angular no frontend e Spring Boot no backend para fornecer uma interface responsiva e uma API robusta.

## Funcionamento
1. **Backend**:
   - Desenvolvido em Spring Boot.
   - Gerencia os dados de resíduos armazenados em um banco de dados MySQL.
   - Exponibiliza uma API REST para o frontend consumir.

2. **Frontend**:
   - Desenvolvido em Angular.
   - Consome a API do backend para exibir os dados em tabelas e gráficos interativos.
   - Utiliza `chart.js` para visualização gráfica.

## Escolhas Tecnológicas
- **Spring Boot**: Framework robusto para desenvolvimento de APIs REST.
- **Angular**: Framework moderno para criação de interfaces dinâmicas.
- **Chart.js**: Biblioteca leve para gráficos interativos.

## Como Executar
1. **Backend**:
   - Configure o banco de dados MySQL.
   - Execute os comandos:
     ```
     mvn clean install
     mvn spring-boot:run
     ```

2. **Frontend**:
   - Instale as dependências:
     ```
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```
     ng serve
     ```

3. Acesse o dashboard em `http://localhost:4200`.

## Visualização de Dados
O dashboard exibe:
- Tabela com detalhes dos resíduos.
- Gráfico de barras mostrando a quantidade de resíduos por tipo.
