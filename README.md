# CercaRed — Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white)

Página de presentación (landing page) de **CercaRed**, la plataforma de orientación social que conecta a los ciudadanos con los servicios públicos y comunitarios que necesitan. El landing presenta la propuesta de CercaRed, muestra los servicios destacados y explica cómo funciona la plataforma, invitando al usuario a entrar al catálogo para buscar los servicios. Es un proyecto estático de una sola página (HTML, CSS y JavaScript puro), sin frameworks ni dependencias de build.

Desde el botón "Buscar servicios" el landing enlaza con la [web app del catálogo de CercaRed](https://github.com/topional/cercared-webapp), donde el usuario realiza la búsqueda y consulta el detalle de cada servicio.

## Secciones de la página

- **Hero**: mensaje principal de la plataforma con accesos directos a "Buscar servicios" y "Cómo funciona".
- **Servicios destacados**: tarjetas de las categorías principales (Apoyo alimentario, Atención de salud, Apoyo educativo y Vivienda) que enlazan al catálogo filtrado.
- **Cómo funciona**: explicación del flujo en cuatro pasos — Busca, Filtra, Revisa y Accede.
- **Modo simple**: presentación de la vista accesible con textos grandes y menos elementos visuales.
- **Información verificada**: sección que destaca que los datos provienen de canales institucionales y enlaces oficiales.
- **Preguntas frecuentes**: acordeón con las dudas más comunes sobre la plataforma.
- **Footer**: pie de página con la navegación y los datos del proyecto.

## Características

- **Diseño responsive**: se adapta a computadora, tablet y celular.
- **Navegación accesible**: menú con soporte de teclado y atributos ARIA, con criterios de accesibilidad WCAG AA.
- **Navegación por anclas**: los enlaces del menú llevan a cada sección de la misma página.
- **Enlace al catálogo**: las llamadas a la acción dirigen a la web app donde se buscan los servicios.

## Tecnologías

- HTML5
- CSS3
- JavaScript (sin frameworks)
- GitHub Pages (despliegue)

## Cómo usar

1. Clona el proyecto:

   ```bash
   git clone https://github.com/topional/cercared-landing.git
   ```

2. Abre `index.html` en tu navegador, o usa una extensión tipo **Live Server** en VS Code para servirlo localmente.

> No necesita instalación ni servidor: es un sitio estático.

**Repositorio:** <https://github.com/topional/cercared-landing>

## Estructura del proyecto

```
cercared-landing/
├── index.html          # Página principal (todas las secciones)
├── css/                # Hojas de estilo (una por sección)
│   ├── base.css
│   ├── navbar.css
│   ├── hero.css
│   ├── featured-services.css
│   ├── how-works.css
│   ├── simple-mode.css
│   ├── verified.css
│   ├── faq.css
│   └── footer.css
├── js/                 # Lógica de la página
│   ├── navbar.js       # Menú de navegación y modo simple
│   └── footer.js       # Pie de página
├── assets/             # Imágenes e íconos
│   ├── images/
│   └── icons/
├── CONTRIBUTING.md     # Convención de nombres para commits y pull requests
└── README.md
```

## Contribuir

Los mensajes de commit y los títulos de pull request siguen la convención descrita en [CONTRIBUTING.md](CONTRIBUTING.md), con el formato `type(scope): description` (por ejemplo, `feat(navbar): implement responsive navigation`).

## Autores

|Código    |Integrante                          |
|----------|------------------------------------|
|U202413604|Cueto Ninaja, Ronal Sebastian       |
|U20231H075|Rivera Calderón, Alvaro Jerry       |
|U202322704|Alarcon Castellanos, Ericks Santiago|
|U20241A112|Donayre Salas, Julio Gabriel        |
|U20211G718|Gálvez Menéndez, Joaquín Alonso     |

-----

**Curso:** 1ASI0400 — IHC y Programación Web · **Universidad Peruana de Ciencias Aplicadas (UPC)** · Período 2026-01
