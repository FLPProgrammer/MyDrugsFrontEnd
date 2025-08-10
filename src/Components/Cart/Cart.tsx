import { Container } from './styles';
import { useCart } from '@/Contexts/CartContext';
import { useWallet } from '@/Contexts/WalletContext';
import { useState } from 'react';
 
export function Cart() {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();
  const { payWithCurrency } = useWallet();
  const [paymentCurrency, setPaymentCurrency] = useState<'btc' | 'eth' | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalBtc = getTotalPrice('btc');
  const totalEth = getTotalPrice('eth');

  function handlePayment() {

    if(!paymentCurrency) {
        alert('Select a payment method');
        return;
    }

    const totalAmount = paymentCurrency === 'btc' ? totalBtc : totalEth;
    const paymentResult = payWithCurrency(totalAmount, paymentCurrency);

    if (paymentResult) {
      setPaymentSuccess(true);
    } else {
      alert('Saldo insuficiente para realizar o pagamento');
    }
  }

  return (
    <Container>
      <h3>Cart 🛍️</h3>
      <div className="itemsContainer">
            {cartItems.length === 0 ? (
                <p>Empty Cart</p>
            ) : (
                cartItems.map((item, index) => (
                <div className="item" key={index}>
                    <p style={{ cursor: 'pointer' }} onClick={() => removeFromCart(item)}>X</p>
                    <img src={item.img} alt="" width={50} />
                    <p>{item.description}</p>
                    <p>{item.btcPrice} BTC | {item.ethPrice} ETH</p>
                </div>
                ))
            )}
        </div>


      {cartItems.length > 0 && !paymentSuccess && (
        <div className='paymentBox'>
          <h4>Total: {paymentCurrency === 'btc' ? totalBtc : totalEth} {paymentCurrency?.toUpperCase()}</h4>
          <button className='buttonPaymentBox' onClick={() => setPaymentCurrency('btc')}>Pay using BTC</button>
          <button className='buttonPaymentBox' onClick={() => setPaymentCurrency('eth')}>Pay using ETH</button>
          <button className='buttonPaymentBox' onClick={handlePayment}>Confirm payment</button>
        </div>
      )}

      {paymentSuccess && <p>Pagamento realizado com sucesso!</p>}
    </Container>
  );
}
