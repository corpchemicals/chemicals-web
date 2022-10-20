import React, {useState} from 'react';
import { categories } from '../scripts/categories';
import CategoryCard from '../components/CategoryCard';


import '../styles/pages/Home.scss'
import oringsURL from '../assets/images/multiple-orings.png'

const Home = () => {
  const [ openModal, setOpenModal ] = useState(false)

  const handleOpenModal = (open, content) => {
    
    setOpenModal(open)
  }

  return (
    <main className='Home'>
      <section className='Home__cover'>
        <div className='Home__cover--titles'>
          <h3>O-Rings para toda necesidad</h3>
          <h1 className='uppercase'>Brindamos las<br />Mejores Opciones<br />de <span className='orange-word'>Sellado</span></h1>
        </div>

        <figure className='Home__cover--img-container'>
          <img src={oringsURL} alt="Variedad de Orings" />
        </figure>

        <div className='Home__cover--catalog-info'>
          <ul>
            <li>+1000 <span className='info-name'>Medidas</span></li>
            <li>+4 <span className='info-name'>Materiales</span></li>
          </ul>
        </div>

      </section>
      
      <section className='Home__cards'>
        <h2 className=' uppercase'>Categorías</h2>
        <ul>
          {categories.map((info, index) => <CategoryCard info={info} key={`CategoryCard-${index}`} handleOpenModal={handleOpenModal} index={index}/>)}
        </ul>
      </section>
    </main>
  );
}
 
export default Home;