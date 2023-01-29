FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
RUN npm install -g npm@9.4.0
RUN npm install
