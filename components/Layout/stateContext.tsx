'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { usePathname } from 'next/dist/client/components/navigation';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

interface ClientUIContextType {
  isMobileView: boolean;

  asideOpen: boolean;
  toggleAside: () => void;
}

const StateContext = createContext<ClientUIContextType | undefined>(undefined);

/**
 * Provides global UI state for the application, such as mobile view detection and aside panel state.
 */
export const StateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const routePath = usePathname();
  const isMobileView = useMediaQuery(`(max-width: 768px)`);
  const [asideOpen, { toggle: toggleAside, open: openAside, close: closeAside }] =
    useDisclosure(false);

  useEffect(() => {
    // Close aside on route change
    if (asideOpen) {
      routePath.includes('templates/') ? openAside() : closeAside();
    }
  }, [routePath]);

  return (
    <StateContext.Provider
      value={{
        isMobileView,

        asideOpen,
        toggleAside,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export function useStateContext() {
  const ctx = useContext(StateContext);
  if (!ctx) {
    throw new Error('useStateContext must be used within ClientUIProvider');
  }
  return ctx;
}
