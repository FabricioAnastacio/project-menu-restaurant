FROM node:alpine
ENV VERSION=1.0.0
# Mudar para o diretório de trabalho /app-frontend-menu 
WORKDIR /app-frontend-menu
# Copiar os package.json e package-lock.json para o container
COPY package*.json ./
# Instalar as dependências Node
RUN npm install
# Copiar o restante dos arquivos da aplicação para o container
COPY . .
# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
ENTRYPOINT [ "npm" ]
CMD [ "start" ]