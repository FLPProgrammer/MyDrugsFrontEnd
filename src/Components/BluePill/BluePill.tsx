import { Container } from './styles';
import WhiteLogo from '@/assets/WhiteLogo.png';
import bluePill from '@/assets/blue_pill.png';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/Contexts/CartContext';
import { products } from '@/Data/products'

export function BluePill() {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find(p => p.name === 'BLUE LAGOON');

  function handleNavigateLeft() {
    navigate('/supermanpill');
  }

  function handleNavigateRight() {
    navigate('/yellowpill');
  }

  function handleAddToCart() {
    if(product) {
      addToCart(product)
    }
  }

  return (
    <Container>
      <div className='divButton1' onClick={handleNavigateLeft}>
        <AiOutlineLeft color='white' size={20} />
      </div>
      <div className='boxDescription'>
        <h1>BLUE PILL</h1>
        <h2>CHILL FEEL</h2>
        <p><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/></p>
      </div>
      <div className='boxImg'>
        <img className="logo" src={WhiteLogo} alt="logo" />
        <img className='bluepill' src={bluePill} alt="Blue Pill" />
      </div>
      <div className='boxPrice'>
        <h3>0.0010 BTC / 0.0500 ETH</h3>
        <p> The Blue Pill brings serenity and emotional balance. <br />
            Ideal for moments when you need to slow down, breathe, and simply feel. <br />
            Let your mind float and your body relax.</p>
        <button onClick={handleAddToCart} className='addButton'>+</button>
      </div>
      <div className='divButton2' onClick={handleNavigateRight} style={{ cursor: 'pointer' }}>
        <AiOutlineRight color='white' size={20} />
      </div>
    </Container>
  );
}
