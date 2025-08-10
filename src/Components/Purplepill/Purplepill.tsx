import { Container } from './styles'
import WhiteLogo from '@/assets/WhiteLogo.png';
import Purplepill from '@/assets/purple_pill.png'
import { FaStar } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';


export function PurplePill() {

    const navigate = useNavigate();

    const { addToCart } = useCart();

    const product = products.find(p => p.name === 'PURPLE DREAM')

    function handleNavigateSupermanPill() {
        navigate('/supermanpill')
    }

    function handleNavigateRedPill() {
        navigate('/redpill')
    }

    function handleToAddCart() {
        if(product) {
          addToCart(product)
        }
      }

    return (
        <Container>
            <div onClick={handleNavigateRedPill} style={{ cursor: 'pointer' }}>
                <AiOutlineLeft color='white' size={20}/>
            </div>
            <div className='boxDescription'>
                <h1>PURPLE FLOWER</h1>
                <h2>A NIGHT OF <br /> FLUFFY HAPPINESS</h2>
                <p><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/></p>
            </div>
            <div className='boxImg'>
                <img className="logo" src={WhiteLogo} alt="logo" />
                <img className='purplepill' src={Purplepill} alt="" />
            </div>
            <div className='boxPrice'>
                <h3>0.0013 BTC / 0.0523 ETH</h3>
                <p>
                    A gentle bloom of euphoria wrapped in twilight dreams. <br />
                    The Purple Flower brings soft laughter, deep thoughts, and peaceful vibes. <br />
                    Let your mind wander among lavender fields of imagination. <br />
                    Perfect for cozy nights and stargazing souls.
                </p>
                <button onClick={handleToAddCart} className='addButton'>+</button>
            </div>
            <div onClick={handleNavigateSupermanPill} style={{ cursor: 'pointer' }}>
                <AiOutlineRight color='white' size={20}/>
            </div>
        </Container>
    )
}