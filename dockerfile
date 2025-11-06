# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set working directory with required naming convention
WORKDIR /app/kleinschmit_jesse_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy all source files
COPY . .

# Build the production-ready app
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine

# Copy the build output from stage 1
COPY --from=build /app/kleinschmit_jesse_ui_garden_build_checks/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (will be mapped to 8018 on host)
EXPOSE 80

# Add metadata labels
LABEL description="UC Component Library - Assignment 13"

CMD ["nginx", "-g", "daemon off;"]