import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  const signUser = (newUser) => {
    // kullanıcya id ekler
    newUser.id = v4();
    // kullanıcıyı lokale'e aktarır
    localStorage.setItem('user', JSON.stringify(newUser));
    // state'i günceller
    setUser(newUser);
  };

  const logoutUser = () => {
    localStorage.removeItem('user');

    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};