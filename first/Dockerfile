FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@9.4.0
COPY app.js ./
COPY index.html ./
RUN npm install
