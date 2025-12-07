# Funeraria_backend

Tecnologías de Backend (API) 

Arquitectura: API RESTful 

Diseñado para responder a métodos HTTP estándar (GET, POST, PUT, DELETE) en rutas específicas (ej., /users y /users/login). 

Seguridad: JSON Web Tokens (JWT) 

El servidor debe generar un token de sesión tras un login exitoso y validar este token en los headers de todas las rutas protegidas (CRUD). 

Persistencia: Base de Datos Relacional o No Relacional 

Necesaria para almacenar y recuperar la información de los usuarios (nombres, cédulas, contraseñas hasheadas y roles). 

Entorno (Común): Node.js y Express (o similar como NestJS, Python/Django, etc.). 

Node.js es el entorno de ejecución, y Express es el framework principal utilizado para definir las rutas y la lógica de la API. 

Capa de Datos (Común): Prisma ORM (u otro ORM/ODM). 

Utilizado para la comunicación entre el backend y la base de datos, manejando las operaciones CRUD. 

Instalacion
Para levantar el proyecto localmente, sigue estos pasos:

# 1.Clona este repositorio en tu máquina local:
git clone https://github.com/josue-j-fernandez/Funeraria_backend.git
# 2.Navega al directorio del proyecto:
cd Funeraria_backend
# 3.Instala las dependencias necesarias:
npm install a ambos y tener pgadmin 18
crear una base ded datos llamada funeraria
# 4.Configuración del Entorno (.env)
El servidor necesita conocer la ubicación de la base de datos y las claves secretas. Estos valores se almacenan en un archivo invisible llamado .env.
En la raíz de la carpeta del Backend, crea un archivo llamado .env.
Copia y pega la estructura de configuración (generalmente desde un archivo .env.example) y completa los valores. Los más críticos son:
DATABASE_URL: La cadena de conexión a tu base de datos PostgreSQL.
JWT_SECRET: Una clave larga y aleatoria, única para tu proyecto, usada para firmar los tokens de sesión.
PORT: El puerto donde el servidor escuchará (e.g., 5000).

# 5.Configuración de la Base de Datos (Prisma)
Si utilizas Prisma para gestionar tu base de datos, debes ejecutar las migraciones para crear las tablas (User) que tu API necesita.
Asegúrate de que tu servidor de base de datos PostgreSQL esté activo.
Desde la terminal en la carpeta del Backend, ejecuta la migración:

npx prisma migrate dev

(Opcional) Carga de Datos Iniciales: Si tienes datos semilla para crear un usuario administrador inicial o datos de prueba

npm run seed

# 6. Inicia el servidor de desarrollo:
npm run dev
# 7. Abre tu navegador y visita 
Server running on http://localhost:3000 para ver la aplicación en funcionamiento.
