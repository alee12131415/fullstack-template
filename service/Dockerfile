# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /opt/app/service

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci
# npm workspaces do not genereate a lockfile so we will not monorepo for now

# Copy the source code
# COPY . .

# required files
COPY dist ./
# COPY service.js.map ./

# Expose the port the server will listen on
EXPOSE 3000

# Run the server
CMD ["node", "dist"]
