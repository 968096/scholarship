#!/usr/bin/env bash
# Build script para o Render

# Sair caso algum comando falhe
set -e

# Construir o projeto com Maven
mvn clean package -DskipTests
