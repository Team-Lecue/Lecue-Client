FROM node:18.17.0-slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD ["yarn", "dev"]
