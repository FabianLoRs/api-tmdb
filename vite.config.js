import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Me habilita este plugin para darle soporte con Vite a React.js.
  plugins: [react()],
  server: {
    port: 3030,
  },
  // Nos permite modificar el puerto del servidor de pre-productivo que nos ofrece Vite,
  // luego de correr el build.
  preview: {
    port: 4270,
  },
  // Me permite personalisar la generacion de los procesos vinculados para producción
  // referente al build.
  build: {
    // Acelerar el proceso de compilarion de los archivos cuando generas el build: .js/.jsx/.css.
    incremetal: true,
    // Habilita un trabajo en conjunto con Babel, para el manejo correcto del versionado de tu JS 
    // a la version que necesite el navegador.
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    // Habilitar la acelearción de compilacion de tu código de TS hacía JS.
    /* typescript: {
      tsconfig: "./tsconfig.json",
    }, */
    // Habilitar una caché para optimizar el compilado de los recursos que caen en dist.
    cache: true,
    // Habilitar la opción de compresión optimizada para minimizar el tamaño de los archivos generados.
    minify: true,
    // Habilitar el modo de entorno para el cual estamos generando el build
    mode: "production",
    // Habilitar la configuración del build medieante chunks parcelados
    chunks: true,
    // Habilitar la configuración para minimizar el tamaño de las librerias del proyecto que pasaran a produccion.
    moduleBundling: true,
    // Pre-carga en memoria de rutas
    prerenderPaths: ["/"],
    // Pre-carga general del código
    modulePreload: true,
    // Podemos especificar otro directorio de salida
    outDir: "build",
    // Habilitar el inspector de recomendaciones
    devCode: true,
    // Habilitar el inspector de recomendaciones y errores
    debug: true,
    

  }
});
