import React, { createContext, useContext, useState } from 'react';
import { Property } from '../types/property';
import { INITIAL_PROPERTIES } from '../data/properties';

interface PropertyContextType {
  properties: Property[];
  selectedProperty: Property | null;
  setSelectedProperty: (prop: Property | null) => void;
  comparisonList: Property[];
  toggleCompare: (prop: Property) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [comparisonList, setComparisonList] = useState<Property[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const toggleCompare = (prop: Property) => {
    setComparisonList((prev) => {
      if (prev.some((p) => p.id === prop.id)) {
        return prev.filter((p) => p.id !== prop.id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), prop];
      }
      return [...prev, prop];
    });
  };

  const clearCompare = () => setComparisonList([]);

  const isInCompare = (id: string) => comparisonList.some((p) => p.id === id);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        selectedProperty,
        setSelectedProperty,
        comparisonList,
        toggleCompare,
        clearCompare,
        isInCompare,
        isCompareModalOpen,
        setIsCompareModalOpen,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
};
