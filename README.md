# ✅ App de Tareas — React + Node.js

## Como ejecutar

### 1. Backend
    cd server
    npm install
    npm run dev        # corre en http://localhost:3001

### 2. Frontend (en otra terminal)
    cd client
    npm install
    npm run dev        # corre en http://localhost:5173

Abre http://localhost:5173 en el navegador.

## Endpoints de la API

| Metodo | Ruta               | Descripcion              |
|--------|--------------------|--------------------------|
| GET    | /api/tareas        | Obtener todas las tareas |
| POST   | /api/tareas        | Crear una tarea          |
| PUT    | /api/tareas/:id    | Completar/descompletar   |
| DELETE | /api/tareas/:id    | Eliminar una tarea       |

## Prueba rapida de la API (sin navegador)

    curl http://localhost:3001/api/tareas
    curl -X POST http://localhost:3001/api/tareas -H "Content-Type: application/json" -d '{"titulo":"Mi tarea"}'

## Despliegue

<!-- AGREGADO (Guía 8, entregable): el LEEME.md del docente se renombró a README.md
     sin cambiar su texto; esta sección se añadió para las URLs, variables y capturas. -->

| Parte | Plataforma | URL en vivo |
|-------|------------|-------------|
| Frontend | Vercel | _pendiente_ |
| API | Render | _pendiente_ |

### Variables de entorno

| Plataforma | Variable | Valor |
|------------|----------|-------|
| Render | `CLIENTE_URL` | URL del frontend en Vercel |
| Vercel | `VITE_API_URL` | URL de la API en Render + `/api/tareas` |

### Capturas

_Pendiente: panel de Render, panel de Vercel y la app en vivo._
