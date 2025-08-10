import { Container } from './styles';
import WhiteLogo from '@/assets/WhiteLogo.png';
import chicabullsPill from '@/assets/chicabulls_pill.png';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/Contexts/CartContext'
import { products } from '@/Data/products';

export function ChicagobullsPill() {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find(p => p.name === 'CHICABULLS')

  function handleNavigatePrevious() {
    navigate('/smilingpill');
  }

  function handleNavigateNext() {
    navigate('/mitsubishipill');
  }

  function handleAddToCart() {
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
        <h1>CHICABULLS PILL</h1>
        <h2>HARDCORE<br /> POWER</h2>
        <p>
          <FaStar color="white" /><FaStar color="white" />
          <FaStar color="white" /><FaStar color="white" />
          <FaStar color="white" />
        </p>
      </div>
      <div className="boxImg">
        <img className="logo" src={WhiteLogo} alt="logo" />
        <img className="chicabullspill" src={chicabullsPill} alt="Chicabulls Pill" />
      </div>
      <div className="boxPrice">
        <h3>0.0015 BTC / 0.0541 ETH</h3>
        <p>
          The Chicabulls Pill unleashes raw, unstoppable strength. <br />
          Designed for those who thrive on intensity and domination. <br />
          Power through your limits with the spirit of a charging bull. <br />
          No mercy, just full force.
       </p>
        <button onClick={handleAddToCart} className="addButton">+</button>
      </div>
      <div onClick={handleNavigateNext} style={{ cursor: 'pointer' }}>
        <AiOutlineRight color="white" size={20} />
      </div>
    </Container>
  );
}
