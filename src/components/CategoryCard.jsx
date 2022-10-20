import React from 'react';
import { useState } from 'react';
import '../styles/components/CategoryCard.scss'

const CategoryCard = ({ info }) => {
  const {name, shortDescription, renderShowMore, iconURL} = info;
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => setShowMore(prevState => !prevState)

  return (
    <li className={`CategoryCard ${showMore ? 'show-more' : ''}`}>
      <i className='icon' style={{backgroundImage: `url(${iconURL})`}}></i>
      <h3>{name}</h3>
      <p>{shortDescription}</p>
      {showMore ? renderShowMore() : null}
      <button onClick={handleShowMore} className={`${showMore ? 'show-more' : ''}`}>{showMore ? 'Ver menos' : 'Ver más'}</button>
    </li>
  );
}
 
export default CategoryCard;