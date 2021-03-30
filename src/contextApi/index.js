import { createContext, useState } from "react";

const AppContext = createContext({
  state: { tabIndex: 3 },
  actions: {
    setTabIndex: () => {},
  },
});

const AppProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const value = {
    state: { tabIndex },
    actions: { setTabIndex },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const { Consumer: AppConsumer } = AppContext;

export { AppProvider, AppConsumer };

export default AppContext;
