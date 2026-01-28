
// src/App.jsx

import('./App.css'); 
import { useState } from 'react';

const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100)

const zombieFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]


const handleAddFighter = (newTeam) => {
  if (money < newTeam.price) {
    return console.log('you have not enough money')
  }
  const inTheTeam = team.find(member => member.id === newTeam.id)
  if (inTheTeam) {
    return console.log('you can not add the same zombie')
  }
  const zombieTeam = [...team, newTeam] 
  setTeam(zombieTeam);
  setMoney(money - newTeam.price)
}; 

const handleRemoveFighter = (newTeam) => {

  const zombieTeam = [...team, newTeam] 
  setTeam(zombieTeam.filter(member => member.id !== newTeam.id));
  setMoney(money + newTeam.price)
}; 

const totalStrength = team.reduce((sum, member) => sum + member.strength, 0);
const totalAgility = team.reduce((sum, member) => sum + member.agility, 0);

  return (
    <>
    <h1>Hello world!</h1>
    <h2>Total strenght: {totalStrength}</h2>
    <h2>Total agility: {totalAgility}</h2>
    <h2>Money: £{money} </h2>
    <h2>Team:
    <ul>{team.length === 0 ? (<p>Pick some team members!</p>) : team.map((zombie, index) => 
    (<li key={index}>
      <p>{zombie.name}</p>
      <p>{zombie.price}</p>
      <p>{zombie.strength}</p>
      <p>{zombie.agility}</p>
      <img src={zombie.img} />
      <button onClick={() => handleRemoveFighter(zombie)}>Remove Zombie</button>
    </li>)
    )}
    </ul>
    </h2>
    <ul>
      {zombieFighters.map((zombie) => (
        <li key={zombie.id}>
        <p>{zombie.name}</p>
        <p>{zombie.price}</p>
        <p>{zombie.strength}</p>
        <p>{zombie.agility}</p>
        <img src={zombie.img} />
        <button onClick={() => handleAddFighter(zombie)}>Add Zombie</button>
        </li>
      ))}
    </ul>
    </>
  );
}; 



export default App; 
