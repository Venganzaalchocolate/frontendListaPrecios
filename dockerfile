#Usar una imagen de nodejs para crear la aplicacion
#En un directorio intermedio build


FROM httpd:latest 
#Establecer directorio de trabajo del contenedor
WORKDIR /app



#Copiar los archivos desde el directorio temporal donde hemos realizado el build con la imagen de node (--from=build), copiar la carpeta dist al directorio de trabajo /app y a nuestro servidor apache 
COPY .next/ /usr/local/apache2/htdocs/ 

#Exponer el puerto 80
EXPOSE 80