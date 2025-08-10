import { Container } from './styles'
import WhiteLogo from '@/assets/WhiteLogo.png';
import redPill from '@/assets/red_pill.png';
import { FaStar } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';

export function RedPill() {

    const navigate = useNavigate()

    const { addToCart } = useCart();
  
    const product = products.find(p => p.name === 'RED PILL')

    function handleNavigatePrevious() {
        navigate('/bluepill');
      }
    
      function handleNavigateNext() {
        navigate('/purplepill');
      }
    
      function handleToAddCart() {
        if (product) {
          addToCart(product);
        }
      }

    return (
        <Container>
            <div onClick={handleNavigatePrevious}>
                <AiOutlineLeft color='white' size={20}/>
            </div>
            <div className='boxDescription'>
                <h1>RED PILL</h1>
                <h2>ENERGY AND POWER</h2>
                <p><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/></p>
            </div>
            <div className='boxImg'>
                <img className="logo" src={WhiteLogo} alt="logo" />
                <img className='redpill' src={redPill} alt="" />
            </div>
            <div className='boxPrice'>
                <h3>0.0013 BTC / 0.0523 ETH</h3>
                <p>
                    The Red Pill awakens your inner fire. <br />
                    Feel the surge of energy flow through your body and mind. <br />
                    Perfect for powering through the day with intensity.
                </p>

                <button onClick={handleToAddCart} className='addButton'>+</button>
            </div>
            <div onClick={handleNavigateNext} style={{ cursor: 'pointer' }}>
                <AiOutlineRight color='white' size={20}/>
            </div>
        </Container>
    )
}