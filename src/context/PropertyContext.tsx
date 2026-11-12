import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, PropertyInquiry } from '../types/property';
import { INITIAL_PROPERTIES } from '../data/properties';

const PROPERTIES_STORAGE_KEY = 'nxz_properties_v5';
const INQUIRIES_STORAGE_KEY = 'nxz_inquiries_v5';
const ADMIN_AUTH_KEY = 'nxz_admin_auth';

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Omit<Property, 'id' | 'createdAt'>) => void;
  updateProperty: (id: string, property: Partial<Property>) => void;
  deleteProperty: (id: string) => void;
  resetToDefaults: () => void;
  exportData: () => string;
  importData: (jsonString: string) => boolean;

  // Inquiries
  inquiries: PropertyInquiry[];
  addInquiry: (inquiry: Omit<PropertyInquiry, 'id' | 'submittedAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: 'new' | 'contacted' | 'closed') => void;

  // Admin Auth
  isAdmin: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;

  // UI Modals
  selectedProperty: Property | null;
  setSelectedProperty: (prop: Property | null) => void;

  comparisonList: Property[];
  toggleCompare: (prop: Property) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;

  isAdminPortalOpen: boolean;
  setIsAdminPortalOpen: (open: boolean) => void;

  isEnquiryModalOpen: boolean;
  setIsEnquiryModalOpen: (open: boolean) => void;
  enquiryTargetProperty: Property | null;
  openEnquiryModal: (prop?: Property | null) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Properties state initialized from localStorage
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      const stored = localStorage.getItem(PROPERTIES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load properties from localStorage', e);
    }
    return INITIAL_PROPERTIES;
  });

  // Inquiries state
  const [inquiries, setInquiries] = useState<PropertyInquiry[]>(() => {
    try {
      const stored = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Failed to load inquiries', e);
    }
    return [
      {
        id: 'inq-sample-1',
        propertyId: 'msn-neopolis',
        propertyName: 'MSN Neopolis',
        fullName: 'Dr. Suresh Reddy',
        mobileNumber: '+91 98490 12345',
        emailAddress: 'suresh.reddy@gmail.com',
        enquiryType: 'Site Visit',
        preferredDate: '2026-11-15',
        message: 'Interested in 4 BHK high-floor corner residence with lake view. Please arrange Saturday site visit.',
        submittedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        status: 'new',
      },
      {
        id: 'inq-sample-2',
        propertyId: 'the-crown-mansions-tellapur',
        propertyName: 'The Crown Mansions',
        fullName: 'Vikramaditya Rao',
        mobileNumber: '+91 99899 54321',
        emailAddress: 'v.rao@techinvest.in',
        enquiryType: 'Price Sheet',
        message: 'Please send latest cost breakdown and payment milestone options for 5 BHK East-facing triplex villa.',
        submittedAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        status: 'contacted',
      },
    ];
  });

  // Admin state
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Modals state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [comparisonList, setComparisonList] = useState<Property[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryTargetProperty, setEnquiryTargetProperty] = useState<Property | null>(null);

  // Sync properties to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(PROPERTIES_STORAGE_KEY, JSON.stringify(properties));
    } catch (e) {
      console.error('Failed to save properties to localStorage', e);
    }
  }, [properties]);

  // Sync inquiries to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(inquiries));
    } catch (e) {
      console.error('Failed to save inquiries to localStorage', e);
    }
  }, [inquiries]);

  const addProperty = (newProp: Omit<Property, 'id' | 'createdAt'>) => {
    const slug =
      newProp.slug ||
      newProp.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    const id = slug;
    const propertyWithId: Property = {
      ...newProp,
      id,
      slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProperties((prev) => [propertyWithId, ...prev]);
  };

  const updateProperty = (id: string, updatedFields: Partial<Property>) => {
    setProperties((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields, updatedAt: new Date().toISOString() } : item))
    );
    // If updating currently open modal property, keep synced
    if (selectedProperty && selectedProperty.id === id) {
      setSelectedProperty((prev) => (prev ? { ...prev, ...updatedFields } : null));
    }
  };

  const deleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((item) => item.id !== id));
    if (selectedProperty?.id === id) {
      setSelectedProperty(null);
    }
    setComparisonList((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToDefaults = () => {
    setProperties(INITIAL_PROPERTIES);
    try {
      localStorage.removeItem(PROPERTIES_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const exportData = () => {
    return JSON.stringify(properties, null, 2);
  };

  const importData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setProperties(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import', e);
    }
    return false;
  };

  const addInquiry = (inq: Omit<PropertyInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const newInquiry: PropertyInquiry = {
      ...inq,
      id: `inq-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: 'new' | 'contacted' | 'closed') => {
    setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status } : inq)));
  };

  const loginAdmin = (passcode: string): boolean => {
    // Easy and secure owner passcode: 'admin123' or 'neopolis2026'
    if (passcode.trim() === 'admin123' || passcode.trim() === 'neopolis2026') {
      setIsAdmin(true);
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  };

  const toggleCompare = (prop: Property) => {
    setComparisonList((prev) => {
      if (prev.some((p) => p.id === prop.id)) {
        return prev.filter((p) => p.id !== prop.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 properties at a time.');
        return prev;
      }
      return [...prev, prop];
    });
  };

  const clearCompare = () => setComparisonList([]);

  const isInCompare = (id: string) => comparisonList.some((p) => p.id === id);

  const openEnquiryModal = (prop: Property | null = null) => {
    setEnquiryTargetProperty(prop);
    setIsEnquiryModalOpen(true);
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        addProperty,
        updateProperty,
        deleteProperty,
        resetToDefaults,
        exportData,
        importData,
        inquiries,
        addInquiry,
        updateInquiryStatus,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        selectedProperty,
        setSelectedProperty,
        comparisonList,
        toggleCompare,
        clearCompare,
        isInCompare,
        isCompareModalOpen,
        setIsCompareModalOpen,
        isAdminPortalOpen,
        setIsAdminPortalOpen,
        isEnquiryModalOpen,
        setIsEnquiryModalOpen,
        enquiryTargetProperty,
        openEnquiryModal,
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
