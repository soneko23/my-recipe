
function MyRecipes({label, image, calories, ingredients, mealType, cuisineType}) {
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>

        <div className="container">
            <div className="list">
                <img width="48" height="48" src="https://img.icons8.com/neon/96/star.png" alt="star"/>
                <p>{cuisineType} cuisine</p></div>  
            <div className="list">     
                <img width="48" height="48" src="https://img.icons8.com/color/48/edible.png" alt="edible"/>
                <p>{calories.toFixed()} calories</p></div>
            <div className="list">
                <img width="48" height="48" src="https://img.icons8.com/color/48/present.png" alt="present"/>
                <p>{mealType}</p></div>
        </div>

        <div className="container">
            <img src={image} alt="dish"/>
        </div>

        <ul className="container list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    </div>)
}

export default MyRecipes;