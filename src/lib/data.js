//assets
import protector from '../assets/higiene-seguridad.jpg'
import medioAmbiente from '../assets/enviroment.webp'
//viewsBg
import higiene from '../assets/higiene-bg.webp'

export const services = [
  {
    id: 1,
    url: '/higiene-y-seguridad',
    img: protector,
    imgService: higiene,
    title: 'Higiene y Seguridad',
    description:
      'Brindamos servicios integrales de Higiene y Seguridad Laboral para proteger a su personal y cumplir con todas las normativas vigentes. Nuestro equipo de profesionales especializados trabaja de manera personalizada con cada cliente, realizando evaluaciones exhaustivas de riesgos, implementando medidas preventivas y capacitando a su personal. Nos enfocamos en crear ambientes de trabajo seguros y saludables, reduciendo accidentes laborales y mejorando la productividad de su empresa. Cumplimos con la Ley 19.587 de Higiene y Seguridad en el Trabajo y el Decreto 351/79, garantizando que su empresa esté en regla con la ART y todos los organismos de control.',
    services: [
      {
        id: 1,
        msg: 'Servicio de Asesoramiento externo en materia de Higiene y seguridad a Industrias, empresas y comercios.',
      },
      {
        id: 2,
        msg: 'Evaluación de riesgos por puestos de trabajo y Plan de acciones preventivas',
      },
      {
        id: 3,
        msg: 'Redacción de procedimientos de trabajo seguro.',
      },
      {
        id: 4,
        msg: 'Confección de Relevamiento de Agentes de Riesgo (RAR) y Relevamiento General de Riesgos Laborales (RGRL) con su correspondiente presentación ante la ART.',
      },
      {
        id: 5,
        msg: 'Capacitaciones en materia de higiene, seguridad y medio ambiente.',
      },
      {
        id: 6,
        msg: 'Evaluaciones ergonómicas según Res. SRT 886/15.',
      },
      {
        id: 7,
        msg: 'Estudio de Carga de fuego y Estudio Antisiniestral Según el Dec. 351/79.',
      },
      {
        id: 8,
        msg: 'Control de equipos e instalaciones contra incendio.',
      },
      {
        id: 9,
        msg: 'Medición de iluminación según Res. SRT 84/12',
      },
      {
        id: 10,
        msg: 'Medición de Ruido Según Res. 85/12.',
      },
      {
        id: 11,
        msg: 'Medición de puesta a tierra y continuidad de las masas del establecimiento según Res. SRT 900/15.',
      },
      {
        id: 12,
        msg: 'Realización de Estudio de Carga térmica',
      },
      {
        id: 13,
        msg: 'Toma de muestra para la realización del análisis fisicoquímico y bacteriológico del agua, realizado por laboratorio habilitado.',
      },
      {
        id: 14,
        msg: 'Plan de evacuación y simulacros.',
      },
    ],
  },
  {
    id: 2,
    url: '/area-medio-ambiente',
    img: medioAmbiente,
    imgService: medioAmbiente,
    title: 'Medio Ambiente',
    description:
      'Ofrecemos soluciones ambientales integrales para que su empresa opere de manera sustentable y en cumplimiento con la legislación ambiental vigente. Realizamos categorizaciones industriales, auditorías ambientales, gestión de residuos especiales y obtención de certificaciones como el CAA (Certificado de Aptitud Ambiental). Nuestro compromiso es ayudar a su empresa a minimizar el impacto ambiental, optimizar procesos y cumplir con las normativas de la Ley 11.459 y demás regulaciones provinciales y municipales. Trabajamos para que su empresa sea ambientalmente responsable, mejorando su imagen corporativa y contribuyendo al cuidado del planeta.',
    services: [
      {
        id: 1,
        msg: 'Categorización de industrias LEY 11459 (NCA) en el Ministerio de Ambiente y Municipio',
      },
      {
        id: 2,
        msg: 'Confección, gestión y seguimiento para la obtención del CAA (Certificado de Aptitud Ambiental).',
      },
      {
        id: 3,
        msg: 'Memoria descriptiva para Habilitación municipal',
      },
      {
        id: 4,
        msg: 'Auditorías ambientales',
      },
      {
        id: 5,
        msg: 'Medición y cálculo de Ruido Vecindario IRAM 4062',
      },
      {
        id: 6,
        msg: 'Gestion de obtención de la licencia de emisiones gaseosas a la atmosfera (LEGA)',
      },
      {
        id: 7,
        msg: 'Presentación de DDJJ de Residuos Especiales',
      },
    ],
  },
]
