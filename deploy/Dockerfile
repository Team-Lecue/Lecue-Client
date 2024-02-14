FROM node:18.17.0-slim

WORKDIR /app

RUN rm -rf node_modules

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .


CMD ["yarn", "start"]
