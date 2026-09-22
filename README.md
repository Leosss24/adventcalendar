# Calendario de Adviento

Calendario de adviento privado y personalizado para varias personas, con una experiencia visual distinta para cada calendario.

## Funciones

- Acceso individual mediante usuario y contraseña.
- Panel de administración para gestionar personas, contraseñas y los 24 días.
- Vista previa administrativa de cualquier calendario sin restricciones de fecha.
- Tarjetas con texto enriquecido, imágenes, YouTube, Spotify y enlaces.
- Temas personalizados para Nhoa, Mery y Manu.
- Persistencia con Cloudflare D1 y sesiones mediante cookies seguras.

## Desarrollo local

```bash
npm ci
npm run db:generate
npm run build
npm start
```

Las migraciones se guardan en `drizzle/`. Los datos locales de Wrangler y las variables de entorno están excluidos de Git.

