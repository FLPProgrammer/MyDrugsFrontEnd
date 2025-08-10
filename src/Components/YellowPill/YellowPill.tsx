import { Container } from './styles';
import WhiteLogo from '@/assets/WhiteLogo.png';
import yellowPill from '@/assets/yellow_pill.png';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';

export function YellowPill() {
  const navigate = useNavigate();

  const { addToCart } = useCart();
  
  const product = products.find(p => p.name === 'YELLOW FLASH')

  function handleNavigatePrevious() {
    navigate('/bluepill');
  }

  function handleNavigateNext() {
    navigate('/smilingpill');
  }

  function handleToAddCart() {
    if(product) {
      addToCart(product)
    }
  }

  return (
    <Container>
      <div className='divButton1' onClick={handleNavigatePrevious} style={{ cursor: 'pointer' }}>
        <AiOutlineLeft color="white" size={20} />
      </div>
      <div className="boxDescription">
        <h1>YELLOW PILL</h1>
        <h2>CLARITY AND FOCUS</h2>
        <p>
          <FaStar color="white" />
          <FaStar color="white" />
          <FaStar color="white" />
          <FaStar color="white" />
          <FaStar color="white" />
        </p>
      </div>
      <div className="boxImg">
        <img className="logo" src={WhiteLogo} alt="logo" />
        <img className="yellowpill" src={yellowPill} alt="Yellow Pill" />
      </div>
      <div className="boxPrice">
        <h3>0.0019 BTC / 0.06 ETH</h3>
        <p>
          The Yellow Pill is the elixir of concentration. <br />
          Perfect for those who want to see everything with clarity and absolute focus. <br />
          A beam of mental light straight into your ideas.
        </p>
        <button onClick={handleToAddCart} className="addButton">+</button>
      </div>
      <div className='divButton2' onClick={handleNavigateNext} style={{ cursor: 'pointer' }}>
        <AiOutlineRight color="white" size={20} />
      </div>
    </Container>
  );
}
