// pageContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface PageContextType {
    storeName: string,
    setStoreName: (storeName: string) => void;
    content: ReactNode | null;
    setContent: (content: ReactNode | null) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
    children: ReactNode;
  }

// Create a provider component
export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    const [content, setContent] = useState<ReactNode | null>(<div>Loading...</div>);
    const [loading, setLoading] = useState(false);
    const [storeName, setStoreName] = useState("bee concept")

    useEffect(() => {
        setLoading(false)
    })
  
    return (
      <PageContext.Provider value={{ content, setContent, storeName, setStoreName }}>
        {loading? (<div>Loading...</div>) : (children)}
        
      </PageContext.Provider>
    );
  };

  // Custom hook to use the context
export const usePageContext = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };
  