import './hero.css'
import myimage from "../assets/moon.png";

export default function hero(){
  return(
   <>
    <div className='details-container'>
    <div className='des'>
      <h1> Hello there, I'm Camille</h1>
      <div className='description-container'>
      <h3> I am an aspiring web designer with a passion for creating visually appealing, user-friendly,
           and functional websites that deliver a seamless online experience.</h3>
    </div>
  </div>
    <div className='img-container'>
      <img src={myimage} alt="" />
    </div>
   </div>
  
   </>
    
  )

  


}