### Caracteristicas

- Asigna los parametros de creacion desde la consola
- Muestra el resultado en consola
- Archivos unicos generados en extension **.txt**

# Tablas de multiplicar con NodeJS

[![Logo](https://myawesomeportafolio.web.app/src/4x/logo.png "Logo")](https://myawesomeportafolio.web.app/src/4x/logo.png "Logo")


------------


Este proyecto permite generar desde la consola en formato de archivo de texto las tablas de multiplicar, pasando como parametros la base y el limite, ademas si se quiere previsualizar el resultado en consola podemos solicitarlo con su respectiva bandera.

### Modo de uso


------------
 una vez clonado el repositorio instalaremos las dependencias necesarias con el siguiente comando:
 
 

    $ npm install
 
 
 Una vez instaladas las dependencias podemos ejecutar la aplicacion con el comando:
 
 
 

    $ node app -b 5 -l 10 -o
 
 Donde los parametros o banderas se usan de la siguiente manera:
 
 -b: Es la base de multiplicacion
 -l: Es el limite para generar la tabla
 -o: Muestra en consola el resultado de la tabla [opcional]
 
 ###Resultados
 

------------

Al generar una tabla de multiplicar, esta se almacenara en la ruta /output.

####Proyecto para curso Node: de cero a experto de Fernando Herrera