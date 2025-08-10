import { Container } from './styles';
import WhiteLogo from '@/assets/WhiteLogo.png';
import mitsubishiPill from '@/assets/mitsubishi_pill.png';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';



export function MitsubishiPill() {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find(p => p.name === 'MITSUBISHI RUSH')

  function handleNavigatePrevious() {
    navigate('/chicagobullspill');
  }

  function handleNavigateNext() {
    navigate('/pinkpill');
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
        <h1>MITSUBISHI PILL</h1>
        <h2>SUPREME<br /> PERFORMANCE</h2>
        <p>
          <FaStar color="white" /><FaStar color="white" />
          <FaStar color="white" /><FaStar color="white" />
          <FaStar color="white" />
        </p>
      </div>
      <div className="boxImg">
        <img className="logo" src={WhiteLogo} alt="logo" />
        <img className="mitsubishipill" src={mitsubishiPill} alt="Mitsubishi Pill" />
      </div>
      <div className="boxPrice">
        <h3>0.0021 BTC / 0.0798 ETH</h3>
        <p>
          The Mitsubishi Pill delivers peak performance with flawless precision. <br />
          Engineered for those who crave speed, control, and excellence. <br />
          Unleash the power of a racing legend in every moment. <br />
          Dominate the road, and leave your limits behind.
        </p>
        <button onClick={handleToAddCart} className="addButton">+</button>
      </div>
      <div onClick={handleNavigateNext} style={{ cursor: 'pointer' }}>
        <AiOutlineRight color="white" size={20} />
      </div>
    </Container>
  );
}
