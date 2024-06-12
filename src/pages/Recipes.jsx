import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import RecipeCard from "../components/RecipesCard"
import { useEffect, useState } from "react"
export default function Recipes(){
  const [search,setSearch] = useState("")
  const [url,setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=c")
  const [item,setItem] = useState();
  const [show,setShow] = useState(false);


  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);
    })
  },[url])


  const searchRecipe=()=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }

  return (
    <div>
      <div className="search-box">
        <input type="search" placeholder="Search...." onChange={e=>setSearch(e.target.value)}/>
        <button className="btn" onClick={searchRecipe}>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

      <div className="RecipeContainer">
        
        {
          show ? <RecipeCard data={item}/> : "Not Found"
        }
      </div>
    </div>
  )
}