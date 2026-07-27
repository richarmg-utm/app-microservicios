# Version de servicios utilizados
Node.js: V22.20.0
PostgreSQL: 18
Angular CLI: 21.2.19 (tener instalado la version 17 o superior ya que la app fue programada para soportar la 17)
Package manager: npm 10.9.3
NestJS CLI: 11.0.24

# Credenciales PostgreSQL + pgAdmin 4 (usar mismas credenciales para evitar editar codigo)
contraseña: admin12345
puerto: 5432
# Nombrar las bases de datos tal cual para evitar editar codigo
Base de datos 1: libros_db
Base de datos 2: prestamos_db
Base de datos 3: usuarios_db


# En cada carpeta, ejecuta npm install (hacer todo con cmd)
cd backend/usuarios-service
npm install

cd ../libros-service
npm install

cd ../prestamos-service
npm install

cd ../../frontend
npm install

# Terminal 1 - Usuarios
cd backend/usuarios-service
npm run start:dev

# Terminal 2 - Libros
cd backend/libros-service
npm run start:dev

# Terminal 3 - Préstamos
cd backend/prestamos-service
npm run start:dev

# Terminal 4 - Frontend
cd frontend
ng serve
