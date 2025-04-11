FROM node:23-alpine
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run dev
EXPOSE 5777
CMD ["npm", "run", "dev"]
# CMD ["http-server", "dist", "-p", "5777", "-o"]

# ETAPA DE CONSTRUCCIÓN
# Usamos una imagen de Node.js como base
# para construir la aplicación
# Usamos la versión 23 de Node.js
# en una imagen de Alpine para reducir el tamaño
# de la imagen final
# Usamos la imagen de Node.js 23 en Alpine
# para reducir el tamaño de la imagen final
# y mejorar la seguridad
# Usamos la imagen de Node.js 23 en Alpine

# FROM node:23-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build


# ETAPA DE PRODUCCIÓN
# Usamos una imagen de Nginx como base
# para servir la aplicación
# Usamos la imagen de Nginx estable en Alpine
# para reducir el tamaño de la imagen final
# Usamos la imagen de Nginx estable en Alpine


# FROM nginx:stable-alpine

# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 8081

# CMD ["nginx", "-g", "daemon off;"]