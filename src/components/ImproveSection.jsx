export default function ImproveSection(){
  const list = [
    "Learn new Recipes",
    "Experiment with food",
    "write Your own Recipes",
    "Know nutrition facts",
    "Get Cooking tips",
    "Get Started"
  ]
  return (
    <div className="">
      <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt=""></img>
      </div>
      <div className="col typography">
        <h1 className="title">Improve Culinary Your Skills</h1>
        { list.map((item,index) => (
          <p className="skill-item" key={index}>{item}</p>
        )) }
        <button className="btn">Sign Up</button>
      </div>
    </div>
    </div>
  )
}