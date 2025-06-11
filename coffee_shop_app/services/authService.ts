import { ref, set, get, child } from 'firebase/database';
import { fireBaseDB } from '../config/firebaseConfig';

interface User {
  email: string;
  password: string;
}

export const registerUser = async (email: string, password: string): Promise<boolean> => {
  try {
    const usersRef = ref(fireBaseDB, 'users');
    const snapshot = await get(child(usersRef, email.replace(/\./g, '_')));

    if (snapshot.exists()) {
      return false; // User already exists
    }

    const userData: User = { email, password };
    await set(ref(fireBaseDB, `users/${email.replace(/\./g, '_')}`), userData);
    return true;
  } catch (error) {
    console.error('Registration error:', error);
    return false;
  }
};

export const loginUser = async (email: string, password: string): Promise<boolean> => {
  try {
    const usersRef = ref(fireBaseDB, 'users');
    const snapshot = await get(child(usersRef, email.replace(/\./g, '_')));

    if (snapshot.exists()) {
      const userData = snapshot.val() as User;
      return userData.password === password;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};

export const checkUserExists = async (email: string): Promise<boolean> => {
  try {
    const usersRef = ref(fireBaseDB, 'users');
    const snapshot = await get(child(usersRef, email.replace(/\./g, '_')));
    return snapshot.exists();
  } catch (error) {
    console.error('Check user error:', error);
    return false;
  }
};

export const resetPassword = async (email: string, newPassword: string): Promise<boolean> => {
  try {
    const usersRef = ref(fireBaseDB, 'users');
    const snapshot = await get(child(usersRef, email.replace(/\./g, '_')));

    if (snapshot.exists()) {
      const userData: User = { email, password: newPassword };
      await set(ref(fireBaseDB, `users/${email.replace(/\./g, '_')}`), userData);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Reset password error:', error);
    return false;
  }
};