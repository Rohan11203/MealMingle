import { Navigate, useNavigate } from "react-router-dom";
import CustomImage from "./CustomImage";

export default function HeroSection(){
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];
  const navigate = useNavigate();
  const exploreSearch=()=>{
    navigate('/recipes')
  }
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What are we About</h1>
        <p className="info">some information about the Recipe Api, Build in 2024 may 23. In this recipe search You can search any recipe you want to make.</p>

        <button onClick={exploreSearch} className="btn">Explore Now</button>
      </div>

      <div className="col gallery">
        { images.map((src,index) =>(
          <CustomImage key={index} imgSrc = {src} pt={("85%")} />
        )) }
      </div>
    </div>
  )
}