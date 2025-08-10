import { Container, GreetingText } from './styles'
import WhiteLogo from '@/assets/WhiteLogo.png'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Cart } from '@/Components/Cart/Cart'
import { useWallet } from '@/Contexts/WalletContext'
import { FaWallet } from 'react-icons/fa'
import { Wallet } from '@/Components/Wallet/Wallet'



export function Header() {

    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const [userName, setUserName] = useState<string | null>(null)
    const { toggleWallet, isWalletOpen } = useWallet(); 


    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const token = localStorage.getItem('token')
        if (storedUserName && token) {
            setUserName(storedUserName);
        } else {
            setUserName(null);
        }
    }, [])

    const navigate = useNavigate();

    function handleHomePage() {
        navigate('/menu')
    }

    function handleLoginPage() {
        navigate('/login')
    }

    function toggleCart() {
        setIsCartOpen(prev => !prev)
    }




    return (
     <Container>
        <div className='boxText'>
            <a href="/shop">SHOP</a>
            <a href="/faq">FAQ</a>
            <FaWallet  className="iconButton" onClick={toggleWallet} color='white'  />
            <FaShoppingCart className="iconButton" onClick={toggleCart} color='white'  style={{cursor: 'pointer'}} />
        </div>
        <div className='boxIcon' onClick={handleHomePage} style={{cursor: "pointer"}}>
            <img className='icon' src={WhiteLogo} alt="logoMyDrugs" />
        </div>
        <div className='boxText2'>
            {userName && <GreetingText>Hello, {userName}</GreetingText>}
            <FaUserCircle className="iconButton" onClick={handleLoginPage} color='white'  style={{cursor: 'pointer'}}/>
            <a href="/safety">SAFETY</a>
            <a href="/contact">CONTACT</a>
        </div>

        {isCartOpen && (
                <Cart />
        )}
        {isWalletOpen && <Wallet />}
     </Container>
    )
}