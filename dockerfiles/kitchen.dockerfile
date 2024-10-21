# Stage 1: Build the NestJS application
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application source code to the working directory
COPY ../ .
COPY ../apps/kitchen-service ./apps/kitchen-service

# Build the NestJS application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine AS production

# Set working directory
WORKDIR /usr/src/app

# Copy only production dependencies
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --production

# Copy built application from the build stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy necessary files for gRPC (e.g., proto definitions)
COPY --from=builder /usr/src/app/libs/proto-definitions ./libs/proto-definitions

# Expose the gRPC service port
EXPOSE 5001

# Set environment variables for production
ENV NODE_ENV=production

# Run the gRPC microservice using the built NestJS application
CMD ["node", "dist/apps/kitchen-service/main.js"]
