# El Lago Musical

## Descripción
'El Lago Musical' es una aplicación web interactiva desarrollada en Angular, hecha por parte de una prueba tecnica para FUNIBER, que simula un lago encantado donde una rana, una libélula y un grillo "cantan" en secuencia, creando una melodía armónica basada en sonidos específicos. El usuario puede interactuar con el personaje principal, un campesino, para seleccionar el sonido inicial que activará una secuencia de sonidos entre los animales.

## Funcionalidad
La aplicación permite al usuario:
- Interactuar con el campesino para seleccionar entre varios sonidos iniciales.
- Observar cómo los animales responden a cada sonido seleccionado con una secuencia predefinida que simula una "canción".
- Visualizar mensajes visuales (viñetas) que aparecen sobre los animales y el campesino para indicar qué sonido están "cantando".

## Sonidos disponibles
- **Rana**: brr, birip, brrah, croac
- **Libélula**: fiu, plop, pep
- **Grillo**: cric-cric, trri-trri, bri-bri

## Canciones Simuladas
1. **Secuencia 1**: brr (Rana) → fiu (Libélula) → cric-cric (Grillo) → brrah (Rana)
2. **Secuencia 2**: pep (Libélula) → birip (Rana) → trri-trri (Grillo) → croac (Rana)
3. **Secuencia 3**: bri-bri (Grillo) → plop (Libélula) → cric-cric (Grillo) → brrah (Rana)

## Cómo usar
Para iniciar una secuencia musical:
1. Haga clic en el campesino para mostrar las opciones de sonidos iniciales.
2. Seleccione uno de los sonidos iniciales disponibles: brr, birip, plop, croac o brrah.
3. Observe cómo los animales participan en la secuencia musical según el sonido elegido.
4. Si el sonido inicial es `croac` o `brrah`, que indican silencio, aparecerán 'zzz' sobre la cabeza del campesino, mostrando que no hay secuencia musical para esos sonidos.

## Tecnologías Utilizadas
- Angular
- TypeScript
- HTML5
- CSS3

## Estructura del Proyecto
- `src/`: Contiene el código fuente del proyecto.
- `app/`: Contiene los componentes principales de la aplicación.
 - `app.component.ts`: Archivo TypeScript principal que maneja la lógica de la aplicación.
 - `app.component.html`: Archivo HTML que define la estructura de la interfaz de usuario.
 - `app.component.css`: Archivo CSS que contiene los estilos de la aplicación.
- `assets/`: Contiene las imágenes utilizadas en la aplicación.

## Cómo ejecutar el proyecto localmente
Para ejecutar 'El Lago Musical' en su máquina local, siga estos pasos:
1. Clone el repositorio de GitHub:
git clone https://github.com/Eliezer-09/Prueba_Lago_Musical.git
2. Navegue al directorio del proyecto:
cd Prueba_Lago_Musical
3. Instale las dependencias:
npm install
4. Ejecute la aplicación:
ng serve
5. Abra un navegador y visite `http://localhost:4200/` para ver la aplicación en acción.

## Docker

### Construir y Ejecutar con Docker

Para construir la imagen Docker y ejecutar la aplicación en un contenedor, sigue estos pasos:

1. **Construir la imagen Docker**:
   ```bash
   docker build -t lago-musical .

2. **Ejecutar la imagen Docker:**:
    ```bash
    docker run -d -p 80:80 lago-musical

3. **Ejecutar la imagen Docker**
Abre tu navegador y visita **http://localhost** para ver la aplicación en acción.

