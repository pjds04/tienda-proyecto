# Tienda Proyecto

Este es un proyecto de una tienda en línea desarrollado con tecnologías web modernas. Permite visualizar productos, gestionar un carrito de compras, y enviar mensajes de contacto a través de un formulario integrado con [Formspree](https://formspree.io/).

## Características

- **Productos dinámicos**:
  - Los productos se obtienen desde una API externa ([Fake Store API](https://fakestoreapi.com/)).
  - Cada producto incluye una imagen, descripción y precio.
- **Carrito de compras**:
  - Añade productos al carrito y calcula subtotales y el total en tiempo real.
  - Persistencia de datos en `localStorage` para mantener el carrito incluso después de recargar la página.
  - Botones para vaciar el carrito o finalizar la compra.
- **Formulario de contacto**:
  - Formulario configurado con [Formspree](https://formspree.io/).
  - Envía mensajes directamente al correo configurado en Formspree.
- **Diseño responsivo**:
  - Compatible con dispositivos móviles y pantallas de distintos tamaños.

## Tecnologías utilizadas

- **HTML5**: Estructura del proyecto.
- **CSS3**: Estilos visuales y diseño responsivo.
- **JavaScript**: Lógica de interacción, manejo del DOM y consumo de API.
- **Formspree**: Para gestionar el envío de mensajes del formulario de contacto.

## Configuración del proyecto

1. **Clonar el repositorio**:
   Clona este proyecto en tu máquina local utilizando el siguiente comando:
   ```bash
   git clone https://github.com/tu-usuario/tienda-proyecto.git
