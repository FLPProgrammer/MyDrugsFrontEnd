import { Container } from './styles';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useCart } from '@/Contexts/CartContext';

type CardProps = {
    img: string;
    description: string;
    btcPrice: string;
    ethPrice: string;
    stars: number;
};

export function Card({ img, description, btcPrice, ethPrice, stars }: CardProps) {
    const { addToCart } = useCart();

    function handleBuy() {
        const newProduct = { img, description, btcPrice, ethPrice };
        addToCart(newProduct);
    }

    const renderStars = () => {
        const fullStars = stars;
        const emptyStars = 5 - fullStars;

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} color="#FFD700" size={16} />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} color="#FFD700" size={16} />
                ))}
            </>
        );
    };

    return (
        <Container>
            <div className="boxImg">
                <img src={img} alt="product" />
            </div>
            <div className="boxInfo">
                <p>{description}</p>
            </div>
            <div className="stars">{renderStars()}</div>
            <div className="boxPrice">
                <p>{btcPrice}</p>
                <p>{ethPrice}</p>
            </div>
            <button onClick={handleBuy} className="buyButton">Buy</button>
        </Container>
    );
}
