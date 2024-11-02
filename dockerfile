# Use an official Node.js image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Expose the Next.js port (default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]