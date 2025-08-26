import { Container, FadeWrapper } from './styles'
import { Header } from '@/Components/Header/Header'
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export function HomePage() {

    const pillRoutes: string[] = ['/greenpill', '/menu', '/redpill', '/purplepill', '/supermanpill', '/bluepill', '/yellowpill', '/smilingpill', '/chicagobullspill', '/mitsubishipill', '/pinkpill'];
    const [isFading, setIsFading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
  useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                const currentIndex = pillRoutes.indexOf(location.pathname);
                const nextIndex = (currentIndex + 1) % pillRoutes.length;
                navigate(pillRoutes[nextIndex]);
                setIsFading(false);
            }, 1000)
        }, 5000);

        return () => clearInterval(interval)
    }, [location.pathname])



    return (
       <Container>
            <Header />
            <FadeWrapper className={isFading ? 'fade-out' : ''}>
                <Outlet />
            </FadeWrapper>
       </Container> 
    )
}