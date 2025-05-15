import React, { createContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [buyWindowOpen, setBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const openBuyWindow = (stockId) => {
    setSelectedStock(stockId);
    setBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setBuyWindowOpen(false);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        buyWindowOpen,
        selectedStock,
        openBuyWindow,
        closeBuyWindow
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;