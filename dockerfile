# Establece la imagen base para la etapa de construcción
FROM node:18-alpine AS build
# Establece el directorio de trabajo en /app
WORKDIR /app
# Copia los archivos package*.json al directorio de trabajo
COPY package*.json ./
# Ejecuta npm ci para instalar las dependencias de manera rápida y reproducible
RUN npm ci
# Copia todos los archivos del contexto del Dockerfile al directorio de trabajo
COPY . .
# Ejecuta npm run build para construir la aplicación Next.js
RUN npm run build
# Establece la imagen base para la etapa de ejecución
FROM node:18-alpine AS runtime
# Establece el directorio de trabajo en /app
WORKDIR /app
# Copia los archivos package*.json al directorio de trabajo
COPY package*.json ./
# Ejecuta npm ci --only=production para instalar solo las dependencias de producción
RUN npm ci --only=production
# Copia el directorio .next de la etapa de construcción al directorio actual
COPY --from=build /app/.next ./.next
# Copia el directorio public de la etapa de construcción al directorio public del contenedor
COPY --from=build /app/public ./public
# Expone el puerto 3000
EXPOSE 3000
# Establece el usuario a node para mejorar la seguridad
USER node
# Define el comando de inicio para ejecutar la aplicación
CMD ["npm", "start"]