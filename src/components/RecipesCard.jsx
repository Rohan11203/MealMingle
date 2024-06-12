import { useNavigate } from "react-router-dom";

export default function RecipeCard({data}){
  console.log(data);
  let navigate=useNavigate();
  return (
      <>
      {
        (!data)?"Not Found":data.map(item=>{
          return (
            <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
              <img src={item.strMealThumb}/>
              <h3>{item.strMeal}</h3>
          </div>
        )
       })
      }
       

      </>
  )
}