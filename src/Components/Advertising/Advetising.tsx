import { Container } from './styles'
import { pillsData } from '@/Data/advertising'
import { useState, useEffect } from 'react'

export function Advertising() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true); 

    useEffect(() => {
        const timeout = setTimeout(() => {
          setFade(false);
    
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % pillsData.length);
            setFade(true);
          }, 300); 
        }, 2000); 
    
        return () => clearTimeout(timeout);
      }, [currentIndex]);
    
      const currentAd = pillsData[currentIndex];

    return (
        <Container className={fade ? 'fade-in' : 'fade-out'}>
          <div className='divDescription'>
            <h2>{currentAd.description}</h2>      
          </div>
          <div>
            <img src={currentAd.img} alt="pill" />
          </div>
        </Container>
    )
}