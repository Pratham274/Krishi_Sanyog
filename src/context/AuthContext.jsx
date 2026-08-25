import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const mockFarmerUser = {
  id: 'FARM-9842',
  name: 'Ramesh Patel',
  role: 'farmer',
  email: 'ramesh.patel@krishisanyog.in',
  phone: '+91 98765 43210',
  location: 'Indore, Madhya Pradesh',
  landSize: 4.5,
  soilType: 'Black Cotton Soil',
  avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200',
  joinedDate: 'March 2024',
};

export const mockAdminUser = {
  id: 'ADM-001',
  name: 'Dr. Ananya Sharma',
  role: 'admin',
  email: 'ananya.admin@krishisanyog.gov.in',
  department: 'Chief Agricultural Officer & AI Director',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedRole = localStorage.getItem('krishi_auth_role');
    if (savedRole === 'admin') return mockAdminUser;
    if (savedRole === 'farmer') return mockFarmerUser;
    return null; // Require login/registration by default for new visitors
  });

  const login = (role = 'farmer') => {
    const selectedUser = role === 'admin' ? mockAdminUser : mockFarmerUser;
    setUser(selectedUser);
    localStorage.setItem('krishi_auth_role', role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('krishi_auth_role');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
