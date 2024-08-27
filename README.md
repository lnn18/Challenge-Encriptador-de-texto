# Challenge-Encriptador-de-texto
Curso de Practicando lógica de programación: Challenge Encriptador de texto.


## Descripción

Este proyecto es una aplicación web que permite encriptar y desencriptar mensajes de texto utilizando un conjunto de reglas de sustitución simples. El sistema está diseñado para trabajar con texto en minúsculas y sin acentos. La interfaz es sencilla e intuitiva, permitiendo al usuario ingresar un mensaje, encriptarlo, desencriptarlo, y copiar el resultado al portapapeles.

## Funcionalidades

1. **Encriptar Mensaje**: 
   - El usuario ingresa un texto en un campo de texto y presiona el botón "Encriptar". El sistema convierte las vocales en su correspondiente forma encriptada.
   - Reglas de encriptación:
     - `e` -> `enter`
     - `i` -> `imes`
     - `a` -> `ai`
     - `o` -> `ober`
     - `u` -> `ufat`

2. **Desencriptar Mensaje**:
   - El usuario puede ingresar un texto previamente encriptado y presionar el botón "Desencriptar". El sistema revertirá el mensaje encriptado a su forma original.

3. **Copiar al Portapapeles**:
   - Después de encriptar o desencriptar un mensaje, el usuario puede copiar el resultado al portapapeles presionando el botón "Copiar".

4. **Validaciones**:
   - El sistema advierte al usuario que solo se aceptan letras minúsculas y sin acentos.

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación, definiendo el layout y los elementos interactivos como el área de texto, botones, y mensajes de alerta.
- `style.css`: Establece los estilos visuales de la aplicación, incluyendo la disposición del contenido, colores, fuentes, y adaptaciones responsivas.
- `script.js`: Incluye la lógica de encriptación y desencriptación, manejo de eventos, y la funcionalidad para copiar el texto al portapapeles.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web preferido.
3. Ingresa un texto en el área de texto, selecciona "Encriptar" o "Desencriptar", y observa el resultado.

## Créditos

- Este proyecto fue desarrollado por Lina Figueredo (2024).
