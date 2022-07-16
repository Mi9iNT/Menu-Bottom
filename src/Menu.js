import React, { useState } from 'react';
import './menu.css';
import House from './assets/fonts/fontawesome/house-solid-blanc.svg';
import ContactMe from './assets/fonts/fontawesome/envelope-solid-blanc.svg';
import MyCV from './assets/fonts/fontawesome/address-card-solid-blanc.svg';
import Toggle from './components/Toggle';

function App() {
  const menus = [
    {
      icon: House,
      name: "Accueil",
      alt: "Accueil",
      iden: "Accueil",
    },
    {
      icon: MyCV,
      name: "CV",
      alt: "Mon cv",
      iden: "monCv",
    },
    {
      icon: ContactMe,
      name: "Contact",
      alt: "Me contacter",
      iden: "meContacter",
    },
    
  ];
  const [selected, setSelected] = useState(0);

  // const btnCircle = document.querySelector('.btn-circle');
  // btnCircle.onClick('keydown', (event) => {
  //   btnCircle.classList.toggle('menu-anim')
  // })
  return (
    
    <div className="MenuBottom">
      <ul className='dispoMenuBottom'>
        {menus.map((val, index) => {
          return (
            <li key={index} onClick={() => setSelected(index)} className={`${index === selected ? "active" : ""}`}>
              <div>
                <a href='#'>
                  <img className='icoMenuBottom' src={val.icon} alt={val.alt} title={val.name} id={val.iden} />
                </a>
              </div>
            </li>
          )
        })}
        <div className='menu-circle-bg' />
      </ul>
      <div className='container-corner'>
        <div className="btn-cricle">
          <Toggle />
        </div>
      </div>
     </div>
)}

export default App;
