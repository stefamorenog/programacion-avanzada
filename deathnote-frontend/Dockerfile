# Etapa 1: Build de producción
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx para archivos estáticos
FROM nginx:alpine

# Elimina configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia archivos de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
