import {Carousel} from 'react-responsive-carousel'
import img1 from '../Images/img1.jpg'
import img5 from  '../Images/img5.jpg'
import img4 from '../Images/img4.jpg'
import img7 from '../Images/img7.jpg'
import './carousel.css'
const Carouselitem = () => {
  return( 
    <div>
   <Carousel infiniteLoop autoPlay={true} showThumbs={false} >
    <div className='Carousel-img'>
    <img src={img1} alt=''/>

    </div> 
    <div className='Carousel-img'>
    <img src={img5} alt=''/>

    </div> 
    <div className='Carousel-img'>
    <img src={img4} alt=''/>

    </div> 
    <div className='Carousel-img'>
    <img src={img7} alt=''/>

    </div> 
   

   </Carousel>
   </div>
   
  )
}

export default Carouselitem