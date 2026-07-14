# 📄 README.md 

```markdown
# 🧟 Zombie Escape · English Survival

![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Live Demo](https://img.shields.io/badge/demo-GitHub_Pages-success)

> **Aprende inglés mientras luchas por tu vida** 🧟📚

---

## 📖 Descripción

**Zombie Escape · English Survival** es un videojuego educativo de supervivencia que combina la emoción de un juego de zombies con el aprendizaje del idioma inglés. Diseñado específicamente para estudiantes del curso **Top Notch Fundamentals**, el juego refuerza los contenidos de las **Unidades 7 y 8** mientras los jugadores luchan por sobrevivir en una ciudad invadida por zombies.

Cada zombie eliminado representa un concepto gramatical o vocabulario aprendido correctamente. Responde preguntas de inglés, destruye zombies, y conviértete en el mejor sobreviviente.

---

## 🎮 Características

### 📚 Contenido Educativo
- **150+ preguntas** de opción múltiple
- **Unidad 7**: Simple Present, Daily Activities, Leisure Activities, Household Chores, Third Person, What Time, When, How Often, Adverbs of Frequency
- **Unidad 8**: There is/are, Where, How Many, Buildings, Neighborhood, Rooms, Furniture, Appliances

### 🎯 Mecánicas de Juego
- ❤️ **3 vidas** – Cada error te acerca al Game Over
- ⏱ **40 segundos** – +3s por acierto, -5s por error
- ⭐ **Sistema de puntuación** – +100 pts por acierto, +50 bonus por respuesta rápida (<3s)
- 🎯 **Precisión** – Calculada en tiempo real
- 🧟 **Zombies animados** – Respiran, atacan y explotan

### 🏆 Ranking Local
- **Top 10** guardado en localStorage
- **Sin servidor** – Todo queda en tu navegador
- **Datos guardados**: Nombre, Puntuación, Zombies eliminados, Precisión, Fecha

### 🎨 Experiencia Visual
- 🌙 **Atmósfera nocturna** con niebla y lluvia
- ✨ **Efectos de partículas** y explosiones
- 🧟 **Zombie animado** con respiración y ataques
- 📱 **100% Responsive** – Funciona en PC, tablet y móvil

### 🔊 Audio
- 🎵 **Música de fondo** (desactivada por defecto)
- ✅ **Efectos de sonido** – Correcto, Incorrecto, Explosión, Game Over
- 🔊 **Control de volumen** desde el menú

---

## 🚀 Demo en Vivo

🔗 **Jugar ahora**: [**Zombie Escape · English Survival**](https://sinho21.github.io/zombie-escape/)

> 🧟 **Top Notch Fundamentals** (Units 7 & 8)  
> Diseño y código: **Isacc Medrano**  
> [🌐 Más sobre mí](https://kingsoft.web)

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del juego |
| **CSS3** | Estilos, animaciones, responsive design |
| **JavaScript (Vanilla ES6+)** | Lógica del juego, interacciones, audio |
| **Web Audio API** | Generación de sonidos sin archivos externos |
| **localStorage** | Almacenamiento del ranking |
| **Google Fonts** | Tipografía Pixel Art (Press Start 2P) |

**Sin frameworks, sin dependencias, sin servidor.** Solo abre y juega.

---

## 📂 Estructura del Proyecto

```
ZombieEscape/
├── index.html          # Página principal (todo en un solo archivo)
├── style.css           # Todos los estilos (responsive, animaciones)
├── script.js           # Toda la lógica del juego (150+ preguntas, ranking, audio)
├── assets/             # Recursos estáticos
│   └── audio/          # Archivos de música (opcional)
│       └── menu-music.mp3
└── README.md           # Este archivo
```

> **Nota:** El juego usa un solo archivo HTML + CSS + JS para máxima simplicidad y compatibilidad.

---

## 🎯 Cómo Jugar

1. **Carga el juego** – Espera a que termine la barra de progreso
2. **Ingresa tu nombre** – Aparecerá en el ranking
3. **Responde preguntas** – Selecciona la opción correcta
4. **Elimina zombies** – Cada respuesta correcta destruye un zombie
5. **Sobrevive** – No te quedes sin vidas ni sin tiempo
6. **Mejora tu puntuación** – Responde rápido para obtener bonus

### Controles
- **PLAY** – Inicia una nueva partida
- **RANKING** – Ver los mejores puntajes
- **HOW TO PLAY** – Instrucciones del juego
- **CREDITS** – Información del proyecto
- **MÚSICA** – Activar/Desactivar música de fondo

---

💻 Instalación y Ejecución

Opción 1: GitHub Pages (Recomendado)
1. **Fork** este repositorio
2. Ve a **Settings → Pages**
3. Selecciona la rama `main` y carpeta raíz (`/`)
4. Guarda y espera unos minutos
5. ¡Tu juego estará en `https://sinho21.github.io/zombie-escape/`!

Opción 2: Live Server (Desarrollo)
```bash
Clona el repositorio
git clone https://github.com/sinho21/Zombie-escape.git

Abre con Visual Studio Code
cd ZombieEscape
code .

Instala Live Server y haz clic derecho en index.html → Open with Live Server
```

### Opción 3: Ejecución Local (Sin servidor)
1. Descarga todos los archivos
2. Abre `index.html` directamente en tu navegador
3. **¡Listo!** (Funciona con `file://`)

### Opción 4: Python (Servidor HTTP)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Abre http://localhost:8000 en tu navegador
```

---

## 🛠️ Personalización

### Agregar Preguntas
Abre `script.js` y añade objetos al array `QUESTION_BANK`:

```javascript
{ 
    q: "¿Tu pregunta en inglés?",
    a: ["Opción A", "Opción B", "Opción C", "Opción D"],
    c: 0  // Índice de la respuesta correcta (0-3)
}
```

### Cambiar Configuración del Juego
Modifica estas variables en `script.js`:

```javascript
let lives = 3;        // Vidas iniciales
let timeLeft = 40;    // Tiempo inicial (segundos)
// Bonus dentro de handleAnswer()
```

### Agregar Música Personalizada
1. Coloca tu archivo MP3 en `assets/audio/menu-music.mp3`
2. O cambia la ruta en `initBackgroundMusic()`:

```javascript
backgroundMusic = new Audio('assets/audio/tu-musica.mp3');
```

### Cambiar Estilos
Modifica las variables CSS en `style.css`:

```css
:root {
    --primary: #ff3b3b;      /* Color principal */
    --secondary: #ff6b35;    /* Color secundario */
    --accent: #f7d44a;       /* Color de acento */
}
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Este es un proyecto de **código libre** y abierto a mejoras.

### Cómo contribuir:
1. **Fork** este repositorio
2. **Crea una rama** (`git checkout -b feature/nueva-caracteristica`)
3. **Realiza tus cambios** y haz commit (`git commit -m 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre un Pull Request**

### Áreas de mejora:
- 📚 Más preguntas (Unidades 1-6 y 9-10)
- 🎨 Nuevos sprites y animaciones
- 🌍 Soporte para otros idiomas
- 🎵 Más efectos de sonido
- 📱 Mejoras en la experiencia móvil

---

## 📊 Métricas de Evaluación

| Métrica | Significado | Uso Educativo |
|---------|-------------|---------------|
| **Puntuación** | Nivel general de conocimiento | Evaluación de progreso |
| **Precisión (%)** | Porcentaje de aciertos | Identificar áreas débiles |
| **Zombies eliminados** | Cantidad de respuestas correctas | Medir participación |
| **Tiempo restante** | Rapidez de respuesta | Evaluar fluidez |
| **Bonus obtenidos** | Respuestas rápidas (<3s) | Medir automatización |

---

## 🧪 Pruebas y Compatibilidad

| Navegador | Versión | Estado |
|-----------|---------|--------|
| Chrome | 90+ | ✅ Funcional |
| Firefox | 88+ | ✅ Funcional |
| Edge | 90+ | ✅ Funcional |
| Safari | 14+ | ✅ Funcional |
| Opera | 76+ | ✅ Funcional |

| Dispositivo | Resolución | Estado |
|-------------|------------|--------|
| PC | 1920x1080 | ✅ Óptimo |
| Laptop | 1366x768 | ✅ Óptimo |
| Tablet | 768x1024 | ✅ Responsive |
| Móvil | 375x667 | ✅ Responsive |

---

## 📄 Licencia

Este proyecto es **Código Libre** y está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2024 Zombie Escape Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Créditos

- **Diseño y Desarrollo** – Isacc Medrano
- **Inspiración** – Plants vs Zombies, Resident Evil, The House of the Dead
- **Contenido Educativo** – Top Notch Fundamentals (Units 7 & 8)
- **Tipografía** – Google Fonts (Press Start 2P, Inter)

---

## 📞 Contacto

- **GitHub**: [@sinho21](https://github.com/sinho21)
- **Demo**: [Zombie Escape](https://sinho21.github.io/zombie-escape/)


---

## ⭐ Agradecimientos

- A todos los estudiantes que juegan y aprenden con Zombie Escape
- A la comunidad de código abierto por su inspiración
- A los profesores que utilizan el juego como herramienta educativa

---

**🧟 ¡Sobrevive, aprende y diviértete!**

---

*Hecho con ❤️ por Isacc Medrano*

