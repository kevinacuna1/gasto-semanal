# 💰 Gestor de Gastos Semanales

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</div>

<div align="center">
  <h3>💡 Aplicación web interactiva para gestionar tu presupuesto semanal</h3>
  <p>Controla tus gastos de manera inteligente con alertas visuales y seguimiento en tiempo real</p>
</div>

---

## 📋 Descripción

**Gestor de Gastos Semanales** es una aplicación web moderna que te permite llevar un control detallado de tu presupuesto semanal. Con una interfaz intuitiva y alertas visuales inteligentes, podrás:

- ✅ Establecer un presupuesto semanal personalizado
- ✅ Registrar gastos con nombre y cantidad
- ✅ Visualizar el dinero restante en tiempo real
- ✅ Recibir alertas cuando te acerques al límite
- ✅ Eliminar gastos y recuperar el dinero al presupuesto

## 🚀 Características

### 🎯 **Funcionalidades Principales**
- **Presupuesto Dinámico**: Define tu presupuesto al inicio
- **Gestión de Gastos**: Añade y elimina gastos fácilmente
- **Alertas Inteligentes**: Sistema de colores que cambia según tu nivel de gasto
- **Validaciones**: Previene errores con validación de campos
- **Interfaz Responsiva**: Funciona en todos los dispositivos

### 🎨 **Sistema de Alertas Visuales**
| Estado | Color | Condición |
|--------|-------|-----------|
| 🟢 **Saludable** | Verde | Más del 50% del presupuesto disponible |
| 🟡 **Precaución** | Amarillo | Entre 25% y 50% del presupuesto |
| 🔴 **Crítico** | Rojo | Menos del 25% del presupuesto |

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework CSS**: Bootstrap 4
- **Arquitectura**: Programación Orientada a Objetos (POO)
- **Patrones**: Classes ES6, Event Handling, DOM Manipulation

## 📂 Estructura del Proyecto

```
25-PROYECTO-GastoSemanal/
├── 📄 index.html          # Estructura principal
├── 📄 README.md           # Documentación
├── 📁 css/
│   ├── bootstrap.min.css  # Framework Bootstrap
│   └── custom.css         # Estilos personalizados
└── 📁 js/
    └── app.js            # Lógica de la aplicación
```

## 🔧 Instalación y Uso

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/gasto-semanal.git
   ```

2. **Navega al directorio**
   ```bash
   cd gasto-semanal
   ```

3. **Abre en tu navegador**
   ```bash
   # Opción 1: Doble clic en index.html
   # Opción 2: Usar Live Server en VS Code
   # Opción 3: Servir con Python
   python -m http.server 8000
   ```

### Cómo Usar

1. **📊 Establece tu Presupuesto**
   - Al cargar la página, ingresa tu presupuesto semanal
   - El sistema validará que sea un número válido y mayor a 0

2. **💸 Añade Gastos**
   - Completa el formulario con el nombre del gasto
   - Ingresa la cantidad gastada
   - Haz clic en "Agregar"

3. **👀 Monitorea tu Progreso**
   - Observa cómo cambia el color del presupuesto restante
   - Verde: ¡Vas bien! 🟢
   - Amarillo: Ten cuidado 🟡
   - Rojo: ¡Límite crítico! 🔴

4. **🗑️ Gestiona tus Gastos**
   - Elimina gastos incorrectos con el botón "Borrar"
   - El dinero se reintegrará automáticamente a tu presupuesto

## 🎯 Funcionalidades Técnicas

### Validaciones Implementadas
- ✅ Presupuesto debe ser un número válido y positivo
- ✅ Campos de gasto no pueden estar vacíos
- ✅ Cantidad debe ser un número positivo
- ✅ Prevención de gastos cuando el presupuesto se agota

### Características Avanzadas
- 🔄 **Actualización en Tiempo Real**: El presupuesto se actualiza instantáneamente
- 🎨 **Feedback Visual**: Colores dinámicos según el estado del presupuesto
- 💾 **Gestión de Estado**: Manejo eficiente del estado con clases ES6
- 🔍 **Experiencia de Usuario**: Mensajes informativos y validaciones amigables

## 🤝 Contribuciones

¿Quieres mejorar el proyecto? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Kevin Acuna**
- GitHub: [@kevinacuna1](https://github.com/kevinacuna1)

---

<div align="center">
  <h3>⭐ Si te gustó el proyecto, ¡dale una estrella! ⭐</h3>
  <p>Hecho con ❤️ y JavaScript</p>
</div>