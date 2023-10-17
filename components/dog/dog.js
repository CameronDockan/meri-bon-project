 
 async function getDogs () {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    return data
 }
 
 export default async function Dog () {
    const dogs = await getDogs()
    console.log(dogs)
    return (
        <h1 style={{color: 'aliceBlue', fontSize: '30px',}}>sup bee</h1>
    )
 }



 // fetch random dog
 // https://dog.ceo/api/breeds/image/random

 // fetch all dogs
 // https://dog.ceo/api/breeds/list/all
