# 🏢 LR Consultora - Higiene, Seguridad y Medio Ambiente

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646cff.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

> Sitio web profesional para consultora especializada en Higiene, Seguridad Laboral y Medio Ambiente.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración](#️-configuración)
- [Componentes Principales](#-componentes-principales)
- [SEO](#-seo)
- [Performance](#-performance)
- [Deployment](#-deployment)

---

## 📖 Descripción

**LR Consultora** es una empresa especializada en:
- ✅ Higiene y Seguridad Laboral
- ✅ Medio Ambiente
- ✅ Asesoramiento y Capacitaciones
- ✅ Evaluaciones de Riesgo
- ✅ Cumplimiento Normativo

Este sitio web fue completamente refactorizado siguiendo las mejores prácticas de desarrollo moderno, con enfoque en performance, SEO, accesibilidad y experiencia de usuario.

---

## ✨ Características

### 🎨 UI/UX
- ✅ Diseño moderno y profesional
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Animaciones suaves con Framer Motion
- ✅ Paleta de colores corporativa
- ✅ Tipografía optimizada (Inter + Roboto)

### 🔍 SEO Optimizado
- ✅ Meta tags dinámicos por página
- ✅ Open Graph y Twitter Cards
- ✅ Alt text en todas las imágenes
- ✅ Estructura semántica HTML5
- ✅ URLs amigables

### ⚡ Performance
- ✅ Lazy loading de imágenes
- ✅ Code splitting
- ✅ Optimización de bundle
- ✅ Intersection Observer API
- ✅ Core Web Vitals optimizados

### 📱 Funcionalidades
- ✅ Formulario de contacto con validación
- ✅ Botón flotante de WhatsApp
- ✅ Navegación intuitiva
- ✅ Páginas de servicios detalladas
- ✅ Página 404 personalizada

### ♿ Accesibilidad
- ✅ ARIA labels
- ✅ Navegación por teclado
- ✅ Contraste WCAG AA
- ✅ Focus states visibles
- ✅ Screen reader friendly

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| React | 18.2.0 | Framework UI |
| Vite | 4.4.5 | Build tool |
| React Router | 6.15.0 | Routing |
| Tailwind CSS | 3.3.3 | Styling |
| Framer Motion | 10.16.4 | Animaciones |
| NextUI | 2.1.10 | Componentes UI |
| Material Tailwind | 2.1.1 | Componentes UI |
| React Icons | 4.10.1 | Iconos |

---

## 📦 Instalación

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd LindaRico
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Genera build de producción
npm run preview      # Previsualiza build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
npm run format       # Formatea código con Prettier
```

---

## 📁 Estructura del Proyecto

```
LindaRico/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/               # Imágenes y recursos
│   ├── components/
│   │   ├── Buttons/          # Botones reutilizables
│   │   ├── Cards/            # Componentes de tarjetas
│   │   ├── Carousel/         # Carruseles
│   │   ├── ContainerCards/   # Contenedores de cards
│   │   ├── Footer/           # Footer del sitio
│   │   ├── Header/           # Header del sitio
│   │   ├── LazyImage/        # Componente de imagen lazy
│   │   ├── NavBar/           # Navegación
│   │   ├── SEO/              # Componente SEO
│   │   ├── Services/         # Servicios
│   │   ├── ServicesPages/    # Páginas de servicios
│   │   └── Slogan/           # Slogan corporativo
│   ├── config/
│   │   └── siteConfig.js     # ⭐ Configuración centralizada
│   ├── lib/
│   │   └── data.js           # Datos de servicios
│   ├── utils/
│   │   └── performance.js    # Utilidades de performance
│   ├── views/
│   │   ├── 404.jsx           # Página de error
│   │   ├── Contacto.jsx      # Página de contacto
│   │   ├── Home.jsx          # Página de inicio
│   │   └── Services.jsx      # Páginas de servicios
│   ├── App.jsx               # ⭐ Componente principal
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globales
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
├── CHANGELOG.md              # Registro de cambios
└── README.md                 # Este archivo
```

### 📌 Archivos Clave

#### `src/config/siteConfig.js`
Configuración centralizada de:
- Información de la empresa
- Datos de contacto
- SEO por página
- Navegación
- Footer
- Hero carousel

#### `src/App.jsx`
- Layout principal
- Routing
- Componente LayoutWrapper para código DRY

#### `src/components/SEO/SEOHead.jsx`
- Manejo dinámico de meta tags
- Open Graph
- Twitter Cards

---

## ⚙️ Configuración

### Personalizar Información de la Empresa

Editar `src/config/siteConfig.js`:

```javascript
export const siteConfig = {
  company: {
    name: 'Tu Empresa',
    // ...más configuración
  },
  contact: {
    phone: '+54...',
    email: 'tu@email.com',
    // ...
  },
  // ...
}
```

### Cambiar Colores

Editar `tailwind.config.js`:

```javascript
colors: {
  BlueLight: "#00A6FB",
  BlueSemiLight: "#0582CA",
  // ...
}
```

### Agregar Nuevos Servicios

Editar `src/lib/data.js`:

```javascript
export const services = [
  {
    id: 3,
    url: '/nuevo-servicio',
    title: 'Nuevo Servicio',
    description: 'Descripción...',
    services: [...]
  }
]
```

---

## 🧩 Componentes Principales

### SEOHead
```jsx
<SEOHead 
  title="Título"
  description="Descripción"
  keywords="palabra1, palabra2"
/>
```

### LazyImage
```jsx
<LazyImage 
  src={imagen}
  alt="Descripción"
  className="w-full h-full"
/>
```

### FloatingWhatsAppButton
```jsx
<FloatingWhatsAppButton />
// Configuración en siteConfig.js
```

---

## 🔍 SEO

### Meta Tags
- ✅ Title dinámico por página
- ✅ Description optimizada
- ✅ Keywords relevantes
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards

### Mejores Prácticas
- ✅ URLs semánticas
- ✅ Estructura H1-H6 correcta
- ✅ Alt text descriptivo
- ✅ Sitemap (recomendado agregar)
- ✅ robots.txt (recomendado agregar)

### Keywords Principales
```
higiene y seguridad, medio ambiente, consultora,
seguridad laboral, ART, capacitaciones, 
evaluación de riesgos, Buenos Aires
```

---

## ⚡ Performance

### Optimizaciones Implementadas
- ✅ Lazy loading de imágenes (LazyImage component)
- ✅ Code splitting con React Router
- ✅ Vite para build rápido
- ✅ Minificación y compresión
- ✅ Tree shaking automático

### Tips para Mejorar Más
```bash
# Analizar bundle
npm run build
npm run preview

# Comprimir imágenes antes de subir
# Usar formatos modernos (WebP)
# Configurar CDN
```

---

## 🚀 Deployment

### Build de Producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para deploy.

### Plataformas Recomendadas

#### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Arrastrar carpeta dist/ a Netlify
```

#### GitHub Pages
```bash
# Configurar vite.config.js con base correcta
npm run build
# Deploy dist/ a gh-pages branch
```

### Variables de Entorno

Crear `.env`:
```env
VITE_API_URL=https://api.tudominio.com
VITE_CONTACT_EMAIL=contacto@tudominio.com
```

---

## 📞 Contacto

**LR Consultora**

- 🌐 Web: [En desarrollo]
- 📧 Email: lindarico.seh@hotmail.com
- 📱 Teléfono: (+549) 11 3488 8325
- 💬 WhatsApp: Disponible
- 📍 Buenos Aires, Argentina

---

## 📄 Licencia

Este proyecto es privado y pertenece a **LR Consultora**.

---

## 🙏 Agradecimientos

Proyecto desarrollado siguiendo:
- ✅ Screaming Architecture
- ✅ Principios SOLID
- ✅ Clean Code
- ✅ React Best Practices
- ✅ WCAG Accessibility Guidelines

---

## 📝 Changelog

Ver [CHANGELOG.md](./CHANGELOG.md) para el historial completo de cambios.

---

**Última actualización:** Noviembre 2024

**Versión:** 2.0.0

---

<div align="center">
  <p>Hecho con ❤️ para LR Consultora</p>
  <p>⭐ Si te gustó el proyecto, dejanos una estrella!</p>
</div>
