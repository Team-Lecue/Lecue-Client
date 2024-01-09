FROM node:18.17.0-slim

WORKDIR /app

# Copy package files and install dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn


# Copy the rest of the application code
COPY . .

EXPOSE 3000

# Run the build command using Yarn
# RUN yarn build

# Set the command to start the server
CMD ["yarn", "dev"]
