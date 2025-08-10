import { Container } from './styles'
import WhiteLogo from '@/assets/WhiteLogo.png';
import supermanPill from '@/assets/superman_pill.png';
import { FaStar } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';

export function SupermanPill() {

    const navigate = useNavigate()

    const { addToCart } = useCart();
  
    const product = products.find(p => p.name === 'SUPERMAN PILL')

    function handleNavigateGreenPill() {
        navigate('/purplepill')
    }

    function handleNavigateYellowPill() {
        navigate('/bluepill')
    }

    function handleToAddCart() {
        if(product) {
          addToCart(product)
        }
      }

    return (
        <Container>
            <div className='divButton1' onClick={handleNavigateGreenPill}>
                <AiOutlineLeft color='white' size={20}/>
            </div>
            <div className='boxDescription'>
                <h1>RED PILL</h1>
                <h2>SUPERMAN FEEL</h2>
                <p><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/></p>
            </div>
            <div className='boxImg'>
                <img className="logo" src={WhiteLogo} alt="logo" />
                <img className='supermanpill' src={supermanPill} alt="" />
            </div>
            <div className='boxPrice'>
                <h3>0.0013 BTC / 0.0523 ETH</h3>
                <p>
                    Feel the strength and resilience of the Man of Steel. <br />
                    The Superman Pill gives you unmatched confidence, <br />
                    superhuman focus, and a boost of energy to tackle <br />
                    any challenge head-on. Unleash your inner hero <br />
                    and soar beyond limits.
                    </p>

                <button onClick={handleToAddCart} className='addButton'>+</button>
            </div>
            <div className='divButton2' onClick={handleNavigateYellowPill} style={{ cursor: 'pointer' }}>
                <AiOutlineRight color='white' size={20}/>
            </div>
        </Container>
    )
}