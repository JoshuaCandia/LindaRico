//assets
import protector from '../assets/protector-auditivo.jpg';
import medioAmbiente from '../assets/medio-ambiente.jpg';
import prevencionIncendios from '../assets/prevencion-incendios.jpg';
import habilitaciones from '../assets/mujer-plano.jpg';
import estudiosEvaluaciones from '../assets/mujer-notebook.jpg';
import areaConstruccion from '../assets/hombres-carpeta.jpg';

export const services = [
  {
    id: 1,
    url: '/higiene-y-seguridad',
    img: protector,
    title: 'Higiene y Seguridad',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: 'HigieneYSeguridad',
  },
  {
    id: 2,
    url: '/area-medio-ambiente',
    img: medioAmbiente,
    title: 'Área Medio Ambiente',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: 'MedioAmbiente',
  },
  {
    id: 4,
    url: '/habilitaciones',
    img: habilitaciones,
    title: 'Habilitaciones',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: 'Habilitaciones',
  },
  {
    id: 3,
    url: '/prevencion-de-incendios',
    img: prevencionIncendios,
    title: 'Prevención de Incendios',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: 'HigieneYSeguridad',
  },
  {
    id: 5,
    url: '/estudios-evaluaciones',
    img: estudiosEvaluaciones,
    title: 'Estudios & Evaluaciones',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: 'EstudiosEvaluaciones',
  },
  {
    id: 6,
    url: '/construccion',
    img: areaConstruccion,
    title: 'Área Construcción',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: 'Construccion',
  },
];
