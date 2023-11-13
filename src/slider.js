import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'

const Slider=()=>{
    const images = [
        '/images/a2.jpg',
        '/images/a4.jpg',
        '/images/a5.jpeg',
        '/images/a6.jpg',
        
    ];
    return(
        <Carousel infiniteLoop autoPlay showThumbs={false} 
        showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img className="simg" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;