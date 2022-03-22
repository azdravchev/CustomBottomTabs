import React from "react";

const TabContext = React.createContext({opened: false, toggleOpened: () => {}});

export const TabContextProvider = ({children}) => {
  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <TabContext.Provider value={{opened, toggleOpened}}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabMenu = () => React.useContext(TabContext);
