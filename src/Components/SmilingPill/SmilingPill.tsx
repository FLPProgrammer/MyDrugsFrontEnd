import { Container } from './styles';
import WhiteLogo from '@/assets/WhiteLogo.png';
import smilingPill from '@/assets/smilingPill.png';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';

export function SmilingPill() {
  const navigate = useNavigate();

  const { addToCart } = useCart();
  
  const product = products.find(p => p.name === 'SMILING PILL')

  function handleNavigatePrevious() {
    navigate('/yellowpill');
  }

  function handleNavigateNext() {
    navigate('/chicagobullspill');
  }

  function handleToAddCart() {
    if(product) {
      addToCart(product)
    }
  }

  return (
    <Container>
      <div onClick={handleNavigatePrevious} style={{ cursor: 'pointer' }}>
        <AiOutlineLeft color="white" size={20} />
      </div>
      <div className="boxDescription">
        <h1>SMILING PILL</h1>
        <h2>SMILING<br /> FOR NO REASON</h2>
        <p>
          <FaStar color="white" /><FaStar color="white" />
          <FaStar color="white" /><FaStar color="white" />
          <FaStar color="white" />
        </p>
      </div>
      <div className="boxImg">
        <img className="logo" src={WhiteLogo} alt="logo" />
        <img className="smilingpill" src={smilingPill} alt="Smiling Pill" />
      </div>
      <div className="boxPrice">
        <h3>0.0013 BTC / 0.045 ETH</h3>
        <p>
          The Smiling Pill is your daily dose of joy. <br />
          Feel-good vibes that make you grin for no reason. <br />
          Perfect for lifting your mood and spreading happiness. <br />
          Side effect: uncontrollable laughter.
        </p>
        <button onClick={handleToAddCart} className="addButton">+</button>
      </div>
      <div onClick={handleNavigateNext} style={{ cursor: 'pointer' }}>
        <AiOutlineRight color="white" size={20} />
      </div>
    </Container>
  );
}
