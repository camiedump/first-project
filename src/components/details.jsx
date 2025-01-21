import './hero.css'
import myimage from '../assets/Camille.jpg'
import fblogo from '../assets/facebook.svg'
import gmaillogo from '../assets/gmail.svg'
import linkedinlogo from '../assets/linkedin.svg'


export default function Details(){
  return(
   <>
   <div className='details-container'>
    <div className='des'>
      <h1> Hello there, I'm Camille</h1>
      <div className='description-container'>
      <h3> I am an aspiring web designer with a passion for creating visually appealing, user-friendly,
           and functional websites that deliver a seamless online experience.</h3>
    </div>
    <div className='logo-container'>
    <a className='logo' href="" target="_blank">
          <img src={fblogo} className="logo-react" alt="facebook" />
        </a>
        <a className='logo' href="" target="_blank">
          <img src={gmaillogo} className="logo-react" alt="gmail" />
        </a>
        <a className='logo'href="" target="_blank">
          <img src={linkedinlogo} className="logo-react" alt="linkedin" />
        </a>
    </div>


  </div>
    <div className='img-container'>
      <img src={myimage} alt="" />
    </div>
   </div>
  
   
  
   </>
    
  )
}