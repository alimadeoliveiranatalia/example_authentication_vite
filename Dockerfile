FROM node:alpine

WORKDIR /usr/interface

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]