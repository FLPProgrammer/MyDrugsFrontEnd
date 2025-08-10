    import { Container } from './styles'
    import WhiteLogo from '@/assets/WhiteLogo.png';
    import Greenpill from '@/assets/green_pill.png';
    import { FaStar } from 'react-icons/fa'
    import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
    import { useNavigate } from 'react-router-dom'
    import { products } from '@/Data/products';
    import { useCart } from '@/Contexts/CartContext'; 


    export function GreenPill() {

        const navigate = useNavigate()
        const { addToCart } = useCart();

        const product = products.find(p => p.name === 'GREEN SNOWFLAKE')

        function handleNavigateMenu() {
            navigate('/menu')
        }

        function handleNavigatePinkPill() {
            navigate('/pinkpill')
        }

        function handleAddToCart() {
            if(product) {
              addToCart(product)
            }
          }

        return (
            <Container>
                <div onClick={handleNavigatePinkPill}>
                    <AiOutlineLeft color='white'  size={20}/>
                </div>
                <div className='boxDescription'>
                    <h1>GREEN SNOWFLAKE</h1>
                    <h2>A NIGHT OF <br /> FLUFFY POWER</h2>
                    <p><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/><FaStar color='white'/></p>
                </div>
                <div className='boxImg'>
                    <img className="logo" src={WhiteLogo} alt="logo" />
                    <img className='greenpill' src={Greenpill} alt="" />
                </div>
                <div className='boxPrice'>
                    <h3>0.0013 BTC / 0.0523 ETH</h3>
                    <p>
                        The Green Snowflake is your ticket to a surreal night of soft intensity. <br />
                        Light as air, strong as ice – it melts away stress and energizes your mind. <br />
                        Let the snowy calm guide you into a peaceful, powerful dreamscape. <br />
                        Cold never felt this warm.
                    </p>
                    <button onClick={handleAddToCart} className='addButton'>+</button>
                </div>
                <div onClick={handleNavigateMenu} style={{ cursor: 'pointer' }}>
                    <AiOutlineRight color='white' size={20}/>
                </div>
            </Container>
        )
    }