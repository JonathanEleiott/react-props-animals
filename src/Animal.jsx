const Animal = ({ animalType, imageLocation, animalDescription, favoriteFoods }) => {

  return (
    <section>
      <h2>{animalType}</h2>
      <img src={imageLocation} alt="Animal"/>
      <p>{animalType} - {animalDescription}</p>

      {
        favoriteFoods ? <p>{favoriteFoods.join(', ')}</p> : null
      }
    </section>
  )
}

export default Animal
