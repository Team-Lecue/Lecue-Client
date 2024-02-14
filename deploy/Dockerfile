FROM node:18.17.0-slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=2048

RUN yarn

COPY . .


CMD ["yarn", "start"]
