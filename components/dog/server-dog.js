 
 
 async function getDogs () {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    return data
 }
 
 export default async function ServerDog () {
    const dogs = await getDogs()
   //  console.log(JSON.stringify(dogs))
   const stringified_dogs = JSON.stringify(dogs)
    return (
        <h1 style={{color: 'aliceBlue', fontSize: '30px',}}>{stringified_dogs}</h1>
    )
 }



 // fetch random dog
 // https://dog.ceo/api/breeds/image/random

 // fetch all dogs
 // https://dog.ceo/api/breeds/list/all
