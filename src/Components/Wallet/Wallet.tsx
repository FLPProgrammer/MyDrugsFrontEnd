import { Container } from './styles'
import { useWallet } from '@/Contexts/WalletContext'


export function Wallet() {

    const { wallet, isWalletOpen } = useWallet();
 
    return (
        <Container open={isWalletOpen}>
            <h3>My Wallet 💰</h3>
            <p>BTC: {wallet.btc}</p>
            <p>ETH: {wallet.eth}</p>
        </Container>
    )

}