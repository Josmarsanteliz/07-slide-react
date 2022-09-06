import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  //separate
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  useEffect(() => {
const lastValue = people.length -1;
if (value < 0) {
  setValue(lastValue)
}
if (value > lastValue) {
  setValue(0)
}
  },[value,people])

  useEffect(() => {
    let slider =  setInterval(() => {
      setValue(value + 1)
      },5000);
     return () => clearInterval(slider);
  },[value])
  return <section className="section">
    <div className="title">
      <h2><span>/</span>reviews</h2>
    </div>
    {/*component */}
    <div className="section-center">
      {people.map((person,personIndex) => {
        const {id,image,name,title,quote} = person;
        //more stuff
        let position = 'nextSlide'
        if (personIndex === value) {
          position = 'activeSlide'
        }
        if (personIndex === value - 1 || (value === 0 && personIndex === people.length)) {
          position = 'lastSlide'
        }
        return <article className={position} key={id}>
          <img src={image} alt={name}  className='person-img'/>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button className='prev' onClick={()=> setValue(value - 1)}>
        <FiChevronLeft/>
      </button>
      <button className="next" onClick={()=> setValue(value + 1)}>
         <FiChevronRight />
      </button>
    </div>
  </section>;
}

export default App;
