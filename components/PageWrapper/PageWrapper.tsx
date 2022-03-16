import React, { useContext, useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";

type Props = {
  children: React.ReactNode;
};

const PageLoadedContext = React.createContext(false);

const useIsPageLoaded = () => useContext(PageLoadedContext);

const PageWrapper = ({ children }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <PageLoadedContext.Provider value={isLoaded}>
      <Nav isLoaded={isLoaded}>{children}</Nav>
    </PageLoadedContext.Provider>
  );
};

export { PageWrapper, useIsPageLoaded };
