# Dockerfile

# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project
COPY . .

# Build Strapi admin panel
RUN npm run build

# Expose Strapi default port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
