import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Static user data for demo
const STATIC_USERS = [
  { id: 1, email: 'admin@example.com', password: 'admin123', name: 'Admin User', role: 'admin' },
  { id: 2, email: 'user@example.com', password: 'user123', name: 'Regular User', role: 'user' }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const foundUser = STATIC_USERS.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { ...foundUser, password: undefined }; // Remove password from stored data
      setUser(userData);
      localStorage.setItem('admin_user', JSON.stringify(userData));
      return { success: true, user: userData };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('admin_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
