import './App.css';
import { useState } from 'react'
import Animal from './Animal.jsx';
import bunny from './images/bunnyWithCorn.jpeg';
import llama from './images/llama.jpg';
import platypus from './images/platypus.jpg'
import raccoon from './images/raccoon.jpg';

const App = () => {
  const [animalList, setAnimalList] = useState([
    {
      id: 1,
      type: `bunny`,
      imagePath: bunny,
      description: `Bunnies are cute`
    },
    {
      id: 2, 
      type: `llama`,
      imagePath: llama,
      description: `Llamas are fluffy`
    },
    {
      id: 3,
      type: `platypus`,
      imagePath: platypus,
      description: `Flat mouthed egg layer`
    },
    {
      id: 4,
      type: `raccoon`,
      imagePath: raccoon,
      description: `Trash panda that will dominate the world`
    },
    {
      id: 5,
      type: `fox`,
      imagePath: raccoon,
      description: `Foxy fox fox clever fox`
    }
  ])

  return (
    <>
      <h1>Animals</h1>

      {
        animalList.map((currentAnimal) => {
          return (
            <Animal 
              key={currentAnimal.id}
              animalType={currentAnimal.type}
              imageLocation={currentAnimal.imagePath}
              animalDescription={currentAnimal.description}
            />
          )
        })
      }

      {/* <Animal 
        animalType="Bunny" 
        imageLocation={bunny} 
        animalDescription="Bunny Rabbit" 
        favoriteFoods={[]}
      />

      <Animal 
        animalType="Llama" 
        imageLocation={llama} 
        animalDescription="Llama Rabbit"
        favoriteFoods={["lemons", "asparagus", "seeds"]}
      />

      <Animal 
        animalType="Platypus" 
        imageLocation={platypus} 
        animalDescription="Platypus Rabbit" 
        favoriteFoods={["apples", "bananas"]}
      />

      <Animal 
        animalType="Raccoon" 
        imageLocation={raccoon} 
        animalDescription="Raccoon Rabbit"
        favoriteFoods={["pears", "trash", "souls"]}
      /> */}
      
    </>
  )
}

export default App
