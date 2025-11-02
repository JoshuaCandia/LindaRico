/**
 * Configuración centralizada del sitio
 * Contiene todos los textos, metadatos, información de contacto y contenido reutilizable
 */

export const siteConfig = {
  // Información básica de la empresa
  company: {
    name: 'LR Consultora',
    fullName: 'LR Consultora - Higiene, Seguridad y Medio Ambiente',
    tagline: 'Tu Seguridad, Nuestra Prioridad',
    description:
      'Consultora especializada en Higiene y Seguridad Laboral y Medio Ambiente. Servicios profesionales para industrias, empresas y comercios.',
    slogan: {
      title: 'Tu Seguridad, Nuestra Prioridad',
      subtitle: 'Expertos en Seguridad, Higiene y Medio Ambiente',
      description: [
        'Somos una consultora en Higiene y Seguridad y Medio Ambiente con años de experiencia, formada por un equipo multidisciplinario de profesionales de gran capacidad.',
        'Proporcionamos todos los servicios para atender cada necesidad sin descuidar la eficacia de sus operaciones, manteniendo una comunicación constante con el cliente e intercambiando ideas para lograr los requerimientos técnicos legales que su empresa necesita.',
      ],
    },
  },

  // Información de contacto
  contact: {
    phone: '+5491134888325',
    phoneFormatted: '(+549) 11 3488 8325',
    email: 'lindarico.seh@hotmail.com',
    whatsapp: {
      number: '+5491134888325',
      defaultMessage: 'Hola, quisiera más información sobre sus servicios.',
    },
    address: {
      street: '',
      city: 'Buenos Aires',
      country: 'Argentina',
    },
  },

  // SEO y Meta tags por página
  seo: {
    home: {
      title: 'LR Consultora | Higiene, Seguridad y Medio Ambiente',
      description:
        'Servicios profesionales de Higiene y Seguridad Laboral y Medio Ambiente. Asesoramiento, capacitaciones, evaluaciones de riesgo y más.',
      keywords:
        'higiene y seguridad, medio ambiente, consultora, seguridad laboral, ART, capacitaciones, evaluación de riesgos',
    },
    services: {
      title: 'Nuestros Servicios | LR Consultora',
      description:
        'Servicios especializados en Higiene y Seguridad y Medio Ambiente. Asesoramiento, evaluaciones, capacitaciones y más.',
    },
    contact: {
      title: 'Contacto | LR Consultora',
      description:
        'Contáctenos para más información sobre nuestros servicios de Higiene, Seguridad y Medio Ambiente.',
    },
  },

  // Navegación
  navigation: {
    links: [
      { name: 'Inicio', path: '/', icon: 'home' },
      { name: 'Servicios', path: '#servicios', icon: 'services', dropdown: true },
      { name: 'Contacto', path: '/contacto', icon: 'contact' },
    ],
  },

  // Hero Carousel
  hero: {
    slides: [
      {
        id: 1,
        title: 'LR Consultora',
        subtitle: 'Expertos en Seguridad e Higiene',
        description: 'Protegemos tu empresa con soluciones profesionales',
        cta: [
          { text: 'Nuestros Servicios', action: 'scrollToServices' },
          { text: 'Contactar', action: 'navigate', path: '/contacto' },
        ],
      },
      {
        id: 2,
        title: 'Medio Ambiente',
        subtitle: 'Cuidamos el planeta y tu empresa',
        description:
          'Gestión ambiental responsable y cumplimiento normativo',
        cta: [
          { text: 'Ver Servicios', action: 'scrollToServices' },
          { text: 'Consultar', action: 'navigate', path: '/contacto' },
        ],
      },
    ],
  },

  // Redes sociales
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  },

  // Footer
  footer: {
    year: new Date().getFullYear(),
    rights: 'Todos los derechos reservados',
    sections: {
      about: {
        title: 'Sobre Nosotros',
        description:
          'Consultora especializada en Higiene, Seguridad y Medio Ambiente con años de experiencia brindando soluciones integrales.',
      },
      services: {
        title: 'Servicios',
        links: [
          { name: 'Higiene y Seguridad', path: '/higiene-y-seguridad' },
          { name: 'Medio Ambiente', path: '/area-medio-ambiente' },
        ],
      },
      contact: {
        title: 'Contacto',
        info: [
          { type: 'phone', label: 'Teléfono' },
          { type: 'email', label: 'Email' },
          { type: 'whatsapp', label: 'WhatsApp' },
        ],
      },
    },
  },
}

