FROM node:alpine3.23

USER root
WORKDIR /app
EXPOSE 4000

COPY ./src ./src
COPY ./package.json ./
COPY ./.env ./

RUN npm install
CMD ["npm", "run", "start"]