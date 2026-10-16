const express = require("express");
const cors = require("cors");

const app = express();
// CAMBIO (Guía 8, paso 4): antes era app.use(cors()), que acepta cualquier origen.
// Ahora lee CLIENTE_URL (se configura en Render con la URL de Vercel) para que
// solo el frontend pueda usar la API. Si no existe (en la laptop), acepta todo ("*").
app.use(cors({ origin: process.env.CLIENTE_URL || "*" }));
app.use(express.json());

// Datos en memoria (luego los cambias por una base de datos)
let tareas = [
  { id: 1, titulo: "Aprender React", completada: false },
  { id: 2, titulo: "Conectar con Node.js", completada: false },
];
let siguienteId = 3;

// GET - Obtener todas las tareas
app.get("/api/tareas", (req, res) => {
  res.json(tareas);
});

// POST - Crear una tarea
app.post("/api/tareas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo || !titulo.trim()) {
    return res.status(400).json({ error: "El titulo es obligatorio" });
  }
  const nueva = { id: siguienteId++, titulo: titulo.trim(), completada: false };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

// PUT - Marcar/desmarcar como completada
app.put("/api/tareas/:id", (req, res) => {
  const tarea = tareas.find((t) => t.id === Number(req.params.id));
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  tarea.completada = req.body.completada ?? !tarea.completada;
  res.json(tarea);
});

// DELETE - Eliminar una tarea
app.delete("/api/tareas/:id", (req, res) => {
  const existe = tareas.some((t) => t.id === Number(req.params.id));
  if (!existe) return res.status(404).json({ error: "Tarea no encontrada" });
  tareas = tareas.filter((t) => t.id !== Number(req.params.id));
  res.status(204).send();
});

// CAMBIO (Guía 8, "Adaptación clave para producción"): antes era app.listen(3001, ...).
// Render asigna el puerto con la variable de entorno PORT; un puerto fijo hace fallar
// el despliegue. En la laptop, como PORT no existe, sigue usando el 3001.
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API en el puerto ${PORT}`));
