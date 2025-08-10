import { Container } from './styles';
import { Card } from '@/Components/Card/Card';
import { products } from '@/Data/products';
import { Advertising } from '@/Components/Advertising/Advetising';

export function Shop() {
    return (
        <Container>
            <Advertising />
            <div className="boxCards">
                {products.map(product => (
                    <Card
                        key={product.id}
                        img={product.img}
                        description={product.description}
                        btcPrice={product.btcPrice}
                        ethPrice={product.ethPrice}
                        stars={product.stars}
                    />
                ))}
            </div>
        </Container>
    );
}
