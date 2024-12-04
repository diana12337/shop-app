import React, { createContext, useContext, useState } from 'react';

const QuickViewContext = createContext();

export const quickViewFunction = () => {
  return useContext(QuickViewContext);
};

export const SharedFunctionProvider = ({ children }) => {
  const [quickView, setShowQuickView] = useState(false);
  const [cartQuickView, setCartQuickView] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const showQuickView = (isShown) => {
    setShowQuickView(isShown);
  };

  const showCartQuickView = (isShown) => {
    setCartQuickView(isShown);
  };
  const toggleQuickView = (isShown) => {
    setExpanded(isShown);
  };

  return (
    <QuickViewContext.Provider
      value={{
        quickView,
        showQuickView,
        cartQuickView,
        showCartQuickView,
        toggleQuickView,
        expanded,
      }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};
