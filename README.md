# Taller 2: Introducción al Desarrollo Web/Móvil

Este es el segundo taller práctico del curso de Introducción al Desarrollo Web Móvil. En esta taller, implementaremos un sistema utilizando las siguientes tecnologías:


Tecnologías Utilizadas
================================================================================================================
Gestión de Base de Datos:
- XAMPP
  
Backend:
- Composer
- Laravel 10
  
Frontend:
- Node.js 18.10
- Angular 16.2

Repositorio:
- GIT


GIT
================================================================================================================
Asegúrate de tener GIT instalado en tu sistema. Puedes descargarlo en: https://git-scm.com/downloads

Composer
================================================================================================================
Asegúrate de tener Composer instalado en tu sistema. Puedes descargarlo en: https://getcomposer.org/download/

Node.js (v18.10)
================================================================================================================
Asegúrate de tener Node instalado en tu sistema. Puedes descargarlo en: https://nodejs.org/en/blog/release/v18.10.0

Configuración del Entorno
================================================================================================================
- Clona este repositorio en tu máquina local: 

		git clone https://github.com/ernitoft/taller2_iwm

XAMPP
================================================================================================================
Asegúrate de tener XAMPP instalado en tu sistema. Puedes descargarlo en: "https://www.apachefriends.org/es/download.html". Utilizaremos XAMPP para la gestión de la base de datos.

Laravel 10 (https://laravel.com)
================================================================================================================

- Navega al directorio del backend:

		cd backend
- Copia el archivo .env:

  		copy .env.example .env

- Instala las dependencias de Laravel:

		composer install

- Añade JWT al proyecto:
  
		composer require tymon/jwt-auth

- Genera la key de laravel:

  		php artisan key:generate

- Genera la key de JWT:

  		php artisan jwt:secret

- Configura el archivo .env con la información de tu base de datos solo si es necesario (el nombre, los puertos usados).

- Ejecuta las migraciones y los seeders para inicializar la base de datos con datos predefinidos.
  
      php artisan migrate --seed

Angular 16.2 (https://v16.angular.io/docs)
================================================================================================================
- Ejecuta globalmente la siguiente instrucción:
  
		npm install -g @angular/cli@16
  
- Navega al directorio del frontend:

		cd frontend

- Soluciona errores de incompatibilidad:

  		npm install -g npm@7.24.2

- Instala las dependencias de Angular:

		npm install

Excepción
================================================================================================================
Para implementar la traducción de mensajes de error por parte de laravel, accede al directorio vendor de Laravel, encuentra el archivo autoload.php ubicado al final de la carpeta, y agrega la siguiente línea debajo de la línea 23 (En caso de no ser implementado, se causará un error de la función makeMessages):

      require_once __DIR__ . '../../app/Helper/myHelper.php';
  
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
