# Fundación No Me Olvides - Sitio Web

Sitio web OnePage para la Fundación No Me Olvides, una organización chilena que acompaña a mujeres sobrevivientes de violencia de género.

## Stack Técnico

- **Framework:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- **Fuentes:** Playfair Display + Inter (Google Fonts)
- **Diseño:** Responsive, mobile-first

## Instalación

### Requisitos previos

- Node.js 18.14.1 o superior
- npm o yarn

### Pasos

1. **Clonar o descargar el proyecto**

```bash
cd fundacion-no-me-olvides
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

4. **Construir para producción**

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

5. **Previsualizar la build de producción**

```bash
npm run preview
```

## Estructura del Proyecto

```
fundacion-no-me-olvides/
├── public/
│   ├── images/           # Carpeta para imágenes (agregar aquí)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── QuienesSomos.astro
│   │   ├── QueHacemos.astro
│   │   ├── AQuienesAcompanamos.astro
│   │   ├── AporteVoluntario.astro
│   │   ├── Contactanos.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## Personalización

### Reemplazar imágenes placeholder

Las imágenes placeholder están marcadas con un gradiente lila/rosa y texto indicando el tamaño sugerido. Para reemplazarlas:

1. **Agrega tus imágenes** a la carpeta `public/images/`
2. **Busca los componentes** que usan placeholders (Hero, QuienesSomos, etc.)
3. **Reemplaza el div con clase `image-placeholder`** por una etiqueta `<img>`:

```astro
<!-- Antes (placeholder) -->
<div class="image-placeholder aspect-[4/3] w-full max-w-lg mx-auto rounded-3xl shadow-large">
  <!-- contenido placeholder -->
</div>

<!-- Después (imagen real) -->
<img
  src="/images/tu-imagen.jpg"
  alt="Descripción de la imagen"
  class="aspect-[4/3] w-full max-w-lg mx-auto rounded-3xl shadow-large object-cover"
/>
```

**Tamaños sugeridos para imágenes:**
- Hero: 900 x 600 px
- Quiénes Somos: 800 x 500 px
- Qué Hacemos: 800 x 500 px
- Aporte Voluntario: 800 x 500 px
- Fotos de equipo: 200 x 200 px (cuadradas)

### Modificar datos de contacto

Abre el archivo `src/components/Contactanos.astro` y busca la sección `contactInfo`:

```javascript
const contactInfo = [
  {
    label: 'Dirección',
    value: '[Cambiar por dirección real]',
  },
  {
    label: 'Correo',
    value: '[Cambiar por email real]',
  },
  // ...
];
```

También actualiza la información bancaria en `src/components/AporteVoluntario.astro`.

### Modificar datos del equipo

Edita `src/components/QuienesSomos.astro` y busca el array `directiva`:

```javascript
const directiva = [
  {
    nombre: 'Nombre Real',
    cargo: 'Cargo Real',
    descripcion: 'Descripción real de la persona',
  },
  // ...
];
```

### Personalizar colores

Los colores están definidos en `src/styles/global.css`:

```css
@theme {
  --color-primary: #7C5CBF;
  --color-primary-light: #B49BDB;
  --color-secondary: #E8839B;
  --color-accent: #F4A261;
  --color-background: #FFF5F0;
  --color-text: #1F2937;
}
```

### Conectar formulario de contacto

El formulario en `Contactanos.astro` actualmente no envía datos. Para conectarlo:

**Opción 1: Formspree (recomendado para sitios estáticos)**
```html
<form action="https://formspree.io/f/TU_ID" method="POST">
```

**Opción 2: Netlify Forms**
```html
<form name="contacto" method="POST" data-netlify="true">
```

### Agregar redes sociales

Edita los arrays `socialLinks` en:
- `src/components/Contactanos.astro`
- `src/components/Footer.astro`

```javascript
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/tu-usuario',
    icon: `...`, // SVG del icono
  },
  // ...
];
```

## Deploy

### Vercel

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Selecciona "Astro" como framework
4. Click en "Deploy"

### Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Arrastra la carpeta `dist/` al dashboard, o conecta tu repo
3. Configuración automática detectará Astro

### Comandos útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview

# Verificar código
npm run astro check
```

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#7C5CBF` | Elementos principales, botones |
| Primary Light | `#B49BDB` | Fondos suaves, hover |
| Secondary | `#E8839B` | Acentos, badges |
| Accent | `#F4A261` | CTAs especiales, destacados |
| Background | `#FFF5F0` | Fondo general |
| Text | `#1F2937` | Textos principales |

## Líneas de emergencia

El sitio incluye información de líneas de emergencia chilenas:
- **Carabineros:** 133
- **Fono Orientación en Violencia:** 1455

## Licencia

Todos los derechos reservados © 2025 Fundación No Me Olvides

---

Desarrollado con amor para apoyar a mujeres sobrevivientes de violencia de género.
