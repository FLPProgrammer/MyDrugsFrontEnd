import { createContext, useContext, useState, ReactNode } from 'react';

interface Wallet {
  btc: number;
  eth: number;
}

interface WalletContextType {
  wallet: Wallet;
  isWalletOpen: boolean;
  toggleWallet: () => void;
  payWithCurrency: (amount: number, currency: 'btc' | 'eth') => boolean; 
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [wallet, setWallet] = useState<Wallet>({
    btc: 0.523,
    eth: 2.14,
  });

  function toggleWallet() {
    setIsWalletOpen((prev) => !prev);
  }
  function payWithCurrency(amount: number, currency: 'btc' | 'eth'): boolean {
    if (currency === 'btc' && wallet.btc >= amount) {
      setWallet(prev => ({ ...prev, btc: prev.btc - amount }));
      return true;
    } else if (currency === 'eth' && wallet.eth >= amount) {
      setWallet(prev => ({ ...prev, eth: prev.eth - amount }));
      return true;
    }
    return false;
  }



  return (
    <WalletContext.Provider value={{ wallet, isWalletOpen, toggleWallet, payWithCurrency }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet(): WalletContextType {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
