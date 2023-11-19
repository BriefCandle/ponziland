import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

// Define the shape of the context data
interface BalanceContextType {
  balance: number;
  setBalance: Dispatch<SetStateAction<number>>;
}

// Providing a default value that matches the shape of the context data
export const BalanceContext = createContext<BalanceContextType>({
  balance: 0, // Default balance
  setBalance: () => {} // Placeholder function
});

interface BalanceProviderProps {
  children: React.ReactNode;
}

export const BalanceProvider: React.FC<BalanceProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState<number>(12738);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};
