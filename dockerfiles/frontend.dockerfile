# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /usr/src/app

# Install dependencies
COPY ../dashboard/package*.json ./
RUN npm install

# Copy the entire source code to the working directory
COPY ../dashboard .

# Build the Next.js application for static export
RUN npm run build && npm run export

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the static files from the previous build stage
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
