import { useEffect, useState } from 'react';
import './App.css';
import video from './video_tomato.mp4';
import MyRecipes from './MyRecipes';

function App() {

  const MY_ID = "ec22542c";
  const MY_KEY = "1a62e9e2acb4f9223e0b26e52f91bc7d";

  const [searchIn, setSearcIn] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordRequest, setWordRequest] = useState("cheese");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordRequest}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipe(data.hits)
    }
    getRecipe()
  }, [wordRequest])

  const searchRecipe = (e) => {
    setSearcIn(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordRequest(searchIn)
  }
  
  return (<div className='App'>
     <div className='container'>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
      </video>
      <h1>your best recipe</h1>
     </div>

     <div className='container'>
      <form onSubmit={finalSearch}><input className='search' onChange={searchRecipe} value={searchIn} placeholder='Search here...'/></form>
      <button onClick={finalSearch}>Search</button>
     </div>

     {myRecipe.map((element, index) => (
      <MyRecipes key={index}
      label={element.recipe.label} 
      image={element.recipe.image} 
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}
      mealType={element.recipe.mealType}
      cuisineType={element.recipe.cuisineType}/>
     ))}

    </div>
  );
}

export default App;
