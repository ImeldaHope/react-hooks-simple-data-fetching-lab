import React, {useState, useEffect} from 'react'

function App (){
  const [dogImage, setDogImage] = useState('') 

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dog => setDogImage(dog.message))
        
  }, [])

  if(dogImage === '') return <p>Loading ...</p>
  
  return (
    <div><img src={dogImage} alt='A Random Dog'/></div>
  )
}

export default App
