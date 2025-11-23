# Multi-stage build
FROM node:20-alpine AS build

WORKDIR /app/kleinschmit_jesse_final_site

# Install dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build portfolio only
RUN npm run build

# Serve with nginx
FROM nginx:alpine

# Copy portfolio build
COPY --from=build /app/kleinschmit_jesse_final_site/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]