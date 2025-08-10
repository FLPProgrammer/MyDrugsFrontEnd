import { Container } from './styles';
import WhiteLogo from '@/assets/WhiteLogo.png';
import pinkPill from '@/assets/pink_pill.png';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { products } from '@/Data/products'
import { useCart } from '@/Contexts/CartContext';

export function PinkPill() {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find(p => p.name === 'PINK SUNRISE')

  function handleNavigatePrevious() {
    navigate('/mitsubishipill');
  }

  function handleNavigateNext() {
    navigate('/greenpill');
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
        <h1>PINK PILL</h1>
        <h2>SWEET AND UNEXPECTED</h2>
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
        <img className="pinkpill" src={pinkPill} alt="Pink Pill" />
      </div>
      <div className="boxPrice">
        <h3>0.0017 BTC / 0.055 ETH</h3>
        <p>
          An explosion of sensations in a single touch. <br />
          The Pink Pill transforms your reality with lightness and color. <br />
          Perfect for those seeking a new and sweet perspective.
        </p>
        <button onClick={handleToAddCart} className="addButton">+</button>
      </div>
      <div onClick={handleNavigateNext} style={{ cursor: 'pointer' }}>
        <AiOutlineRight color="white" size={20} />
      </div>
    </Container>
  );
}
