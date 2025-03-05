# Crypto Tracker SPA

Crypto Tracker SPA es una aplicación web en tiempo real que permite a los usuarios seguir el valor de criptomonedas mediante WebSockets y visualizar gráficos de velas japonesas con datos históricos.

## 🚀 Características

- 📌 **Seguimiento en tiempo real** del valor de criptomonedas.
- 📈 **Gráficos de velas japonesas** actualizados cada 5 minutos.
- 🔗 **Integración con APIs de criptomonedas** para obtener datos en vivo.
- ⚡ **Construida con React y Vite** para un rendimiento óptimo.
- 📊 **Interfaz moderna y responsive**.
- 💾 **Persistencia en localStorage** para mantener la configuración del usuario.

## 🛠 Tecnologías Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Highcharts](https://www.highcharts.com/) (para gráficos de velas japonesas)
- [React Router](https://reactrouter.com/) (para navegación SPA)
- [WebSockets](https://developer.mozilla.org/es/docs/Web/API/WebSockets) (para datos en tiempo real)

## 📦 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

## para los siguentes pasos se necesita tener instalado NODE si no lo tiene vaya a su pagina oficial e instalelo.

```bash
# Clonar el repositorio
git clone https://github.com/reiarseni/crypto-tracker-spa.git

# Entrar en el directorio
cd crypto-tracker-spa

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`.

## 📌 Uso

1. **Agregar criptomonedas al seguimiento** desde el selector.
2. **Visualizar valores en tiempo real** en la lista de seguimiento.
3. **Hacer clic en una criptomoneda** para ver su gráfico de velas japonesas.
4. **Eliminar criptomonedas** para dejar de seguirlas.

## 🚀 Despliegue

Cuando estés listo para desplegar la aplicación:

1. **Construye la aplicación para producción:**

   ```bash
   npm run build
   ```

   Esto generará un directorio `dist` con la aplicación optimizada.

2. **Servir la aplicación (opcional):**  
   Para probar la build de producción localmente, puedes usar un servidor estático. Por ejemplo, con `serve`:

   ```bash
   npm install -g serve
   serve -s dist
   ```

Esto creará una carpeta `dist` lista para desplegar en un servidor estático.

## 📝 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir! 🎉
