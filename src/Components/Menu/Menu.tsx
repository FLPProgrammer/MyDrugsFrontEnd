import { Container } from './styles';
import Logo from '@/assets/logo_main_page.png';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
export function Menu() {
    const navigate = useNavigate();

    function handleNavigateGreenPill() {
        navigate('/greenpill');
    }

    function handleNavigateRedPill() {
        navigate('/redpill');
    }

    return (
        <Container>
            <div className='buttonLeft' onClick={handleNavigateGreenPill}>
                <AiOutlineLeft color='white' size={50} />
            </div>
            <section>
                <div className='boxText1'>
                    <a>SHOP</a>
                    <p>ALL THE DRUGS YOU WANT</p>
                </div>
                <div className='boxText2'>
                    <a>SAFETY</a>
                    <p>IMPORTANT INFORMATION</p>
                </div>
            </section>
            <div className='boxImg'>
                <img className='logo' src={Logo} alt="" />
            </div>
            <section>
                <div className='boxText3'>
                    <a>FAQ</a>
                    <p>ANSWERING YOUR QUESTIONS</p>
                </div>
                <div className='boxText4'>
                    <a>CONTACT</a>
                    <p>SUGGESTIONS AND FEEDBACK</p>
                </div>
            </section>
            <div className='buttonRight' onClick={handleNavigateRedPill}>
                <AiOutlineRight color='white' size={20} />
            </div>
        </Container>
    );
}
