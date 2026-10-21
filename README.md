#  Evaluación 1 · API REST Copa Libertadores

Este proyecto consiste en una API REST construida desde cero utilizando **Node.js** y **Express**. Permite realizar consultas en memoria sobre 16 clubes de la Copa Libertadores organizados por su respectivo país, manejando de forma estricta los códigos de estado HTTP y controlando de manera óptima los casos borde solicitados en la rúbrica.

---

## 📺 Enlace al Video Explicativo

A continuación, se detalla el enlace con la demostración en vivo de la API y comentarios técnicos del código:

**[Haga clic aquí para ver mi video explicativo de la API](https://drive.google.com/file/d/1vIeu3u5LffmKPFMeygPqhepx6UzxOool/view?usp=drive_link)**

---

## 🛠️ Requisitos e Instalación

Para ejecutar este proyecto de manera local, asegúrate de contar con **Node.js** instalado en tu sistema.

1. **Clonar el repositorio o descargar los archivos del proyecto.**
2. **Instalar las dependencias del proyecto:**
   Abre una terminal en la raíz de la carpeta y ejecuta el comando de instalación de Yarn:
   ```bash
   yarn install
   ```

---

## 🚀 Cómo levantar el proyecto en modo Desarrollo

Para encender el servidor y activar el sistema de recarga automática nativa (`--watch`), ejecuta el siguiente comando en tu terminal:

```bash
yarn dev
```

Una vez ejecutado, verás el mensaje de confirmación en la consola:  
`🏆 API escuchando en http://localhost:3000`

---

## 🔗 Endpoints Disponibles para Pruebas

Puedes probar las rutas directamente en tu navegador web o mediante herramientas como Postman:

* **Obtener todos los clubes:**  
  `GET http://localhost:3000/api/clubes`
* **Filtrar clubes por país (Búsqueda anidada - Ej: Chile):**  
  `GET http://localhost:3000/api/clubes?pais=Chile`
* **Obtener un club por su ID único (Ej: Boca Juniors):**  
  `GET http://localhost:3000/api/clubes/1`
* **Obtener años de títulos de un club con trofeos (Ej: Colo-Colo):**  
  `GET http://localhost:3000/api/titulos/Colo-Colo`
* **Caso borde: Club válido pero sin títulos (Ej: Universidad de Chile):**  
  `GET http://localhost:3000/api/titulos/Universidad de Chile` *(Retorna `[]` con Status 200 OK)*
