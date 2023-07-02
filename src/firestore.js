import { getFirestore } from 'firebase/firestore';
import { collection, query, getDocs } from 'firebase/firestore';
import { app } from './firebase';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const allGoalsQuery = query(collection(db, 'goals'));

export const allTasksQuery = query(collection(db, 'tasks'));

export const getData = async (query) => {
  return await getDocs(query);
};
