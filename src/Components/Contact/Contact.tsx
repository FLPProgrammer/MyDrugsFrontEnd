import { Container } from './styles';
import yellowPill from '@/assets/yellow_pill.png'
import { AnimatedIconGithub, AnimatedIconLinkedin, AnimatedIconWhats } from '../AnimatedIcon/AnimatedIcon';
import mitsubishiPill from '@/assets/mitsubishi_pill.png';
import supermanPill from '@/assets/superman_pill.png';
import chicacobullsPill from '@/assets/chicabulls_pill.png';



export function Contact() {
    return (
        <Container>
            <div className='boxImg'>
                <img src={yellowPill} alt="" />
            </div>
            <section className='boxContacts'>
                <h2 className='contactTitle'>Get in touch</h2>

                <div className='socialMedia'>
                    <AnimatedIconLinkedin size={50} />
                    <a className='link'>
                    https://www.linkedin.com/in/felipe-jos%C3%A9-de-lima-6338b233b/
                    <img className='sidepill' src={supermanPill} alt="superman pill" />
                    </a>
                </div>

                <div className='socialMedia'>
                    <AnimatedIconWhats size={50} />
                    <a className='link'>
                    42999033921
                    <img className='sidepill' src={mitsubishiPill} alt="mitsubishi pill" />
                    </a>
                </div>

                <div className='socialMedia'>
                    <AnimatedIconGithub size={50} />
                    <a className='link'>
                    https://github.com/FollowTheWh1teRabb1t
                    <img className='sidepill' src={chicacobullsPill} alt="chicago bulls pill" />
                    </a>
                </div>
            </section>
     </Container>
    )
}