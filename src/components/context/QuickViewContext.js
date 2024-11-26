import React, { createContext, useContext, useState } from 'react';

const QuickViewContext = createContext();

export const quickViewFunction = () => {
  return useContext(QuickViewContext);
};

export const SharedFunctionProvider = ({ children }) => {
  const [quickView, setShowQuickView] = useState(false);

  const showQuickView = (isShown) => {
    setShowQuickView(isShown);
  };
  return (
    <QuickViewContext.Provider value={{ quickView, showQuickView }}>
      {children}
    </QuickViewContext.Provider>
  );
};
