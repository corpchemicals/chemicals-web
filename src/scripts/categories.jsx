import React from 'react';

// Automotive
import automotiveCover from '../assets/images/blue-car.png'
import automotiveIcon from '../assets/icons/car-icon.png'

// Industrial
import industrialCover from '../assets/images/robotic-arm.png'
import industrialIcon from '../assets/icons/robotic-arm-icon.png'

// Hydraulic
import hydraulicCover from '../assets/images/hydraulic-crane.png'
import hydraulicIcon from '../assets/icons/hydraulic-crane-icon.png'

// Hardware Stores
import hardwareStoresCover from '../assets/images/faucet.png'
import hardwareStoresIcon from '../assets/icons/faucet-icon.png'

const categories = [
  {
    name: "Automovilística",
    image: automotiveCover,
    iconURL: automotiveIcon,
    shortDescription: "Brindamos las mejores soluciones para el sellado de todas las aplicaciones automotrices, tanto en reparación como en mantenimiento.",
    renderShowMore: () => (
      <p className='show-more-description'>
        Nos especializamos en la diversidad de productos del sector:
        <ol>
          <li>Refrigeración automotriz.</li>
          <li>Sistemas de inyección.</li>
          <li>Bombas de gasolina.</li>
          <li>Bombas de agua.</li>
          <li>Tapa válvulas.</li>
          <li>Sistemas de distribución.</li>
        </ol>
      </p>
    )
  },
  {
    name: "Industrial",
    cover: industrialCover,
    iconURL: industrialIcon,
    shortDescription: "Contamos con soluciones para el sellado dirigidas a la industria manufacturera, cubriendo todos los sectores que impliquen procesos de transformación.",
    renderShowMore: () => (
      <p className='show-more-description'>
        Nuestra línea de sellos industrial va dirigida a maquinarias y herramientas empleadas en las industrias manufactureras:
        <ol>
          <li>Alimentación.</li>
          <li>Petroquímica.</li>
          <li>Cauchos.</li>
          <li>Farmacéutica.</li>
          <li>Construcción.</li>
        </ol>
      </p>
    )
  },
  {
    name: "Hidráulica/Neumática",
    cover: hydraulicCover,
    iconURL: hydraulicIcon,
    shortDescription: "Ofrecemos diversidad de opciones para el sellado de sistemas hidráulicos y neumáticos, evitando fugas de fluídos y aire; así como manteneniendo la presión necesaria.",
    renderShowMore: () => (
      <p className='show-more-description'>
        <ol>
          <li>Gatos hidráulicos.</li>
          <li>Cajetines hidráulicos.</li>
          <li>Amortiguadores.</li>
          <li>Limpiaparabrisas.</li>
          <li>Maquinaria o herramientas con ejes giratorios.</li>
        </ol>
      </p>
    )
  },
  {
    name: "Ferretería",
    cover: hardwareStoresCover,
    iconURL: hardwareStoresIcon,
    shortDescription: "Atendemos las necesidads de sellado tanto para el sector del hogar como el ferretero.",
    renderShowMore: () => (
      <p className='show-more-description'>
        Nuestros O-Rings comprenden una diversidad de aplicaciones:
        <ol>
          <li>Bombas de Agua.</li>
          <li>Filtros de Agua.</li>
          <li>Griferías.</li>
          <li>Bombonas de Gas y Oxígeno.</li>
          <li>Herramientas y Conexiones.</li>
        </ol>
      </p>
    )
  },
]

export { categories }