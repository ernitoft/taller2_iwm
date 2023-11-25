# Taller 2: Introducción al Desarrollo Web/Móvil

Este es el segundo taller práctico del curso de Introducción al Desarrollo Web Móvil. En esta taller, implementaremos un sistema utilizando las siguientes tecnologías:


Tecnologías Utilizadas
================================================================================================================
Base de Datos:
- XAMPP
  
Backend:
- Laravel 10
  
Frontend:
- Angular 16.2
  
Configuración del Entorno
================================================================================================================
- Clona este repositorio en tu máquina local: 

		git clone https://https://github.com/ernitoft/taller2_iwm

XAMPP
================================================================================================================
Asegúrate de tener XAMPP instalado en tu sistema. Puedes descargarlo en: "https://www.apachefriends.org/es/download.html". Utilizaremos XAMPP para la gestión de la base de datos.

Laravel 10 (https://laravel.com)
================================================================================================================


- Navega al directorio del backend:

		cd backend

- Instala las dependencias de Laravel:

		composer install


- Configura el archivo .env con la información de tu base de datos (el nombre, los puertos usados).

- Ejecuta las migraciones y los seeders para inicializar la base de datos con datos predefinidos.
  
      php artisan migrate

      php artisan migrate --seed

- Excepción: Para implementar la traducción de mensajes de error por parte de laravel, accede al directorio vendor de Laravel, encuentra el archivo autoload.php ubicado al final de la carpeta, y agrega la siguiente línea debajo de la línea 23 (En caso de no ser implementado, se causará un error de la función makeMessages):

      require_once __DIR__ . '../../app/Helper/myHelper.php';

Angular 16.2 (https://v16.angular.io/docs)
================================================================================================================

- Navega al directorio del frontend:

		cd frontend
- Instala las dependencias de Angular:

		npm install
  
Iniciar la Aplicación
================================================================================================================

Backend (Laravel):

- Ejecuta el servidor de Laravel.

		php artisan serve
El servidor se iniciará en http://localhost:8000.

Frontend (Angular):

- En otra terminal, ejecuta el servidor de desarrollo de Angular.

		ng serve --o
El servidor se iniciará en http://localhost:4200, agregando "--o" se ingresará automaticamente a la dirección mencionada.

De todas formas, puedes acceder a la aplicación en tu navegador utilizando la URL correspondiente a cada servidor.
