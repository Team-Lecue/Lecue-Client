FROM node:18.17.0-slim

WORKDIR /app

# Install Yarn globally
RUN yarn install

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Run the build command using Yarn
RUN yarn build

EXPOSE 5173

# Set the command to start the server
CMD ["yarn", "serve", "-s", "build"]
