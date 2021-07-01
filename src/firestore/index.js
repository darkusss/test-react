import { initializeApp } from 'firebase/app';
import {
  collection, getDocs, getFirestore, addDoc, getDoc, doc, deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAyptBkGKUmuEWkxQ37CSxiFduNqQcdMlY',
  authDomain: 'shop2-37c1e.firebaseapp.com',
  projectId: 'shop2-37c1e',
  storageBucket: 'shop2-37c1e.appspot.com',
  messagingSenderId: '840212992155',
  appId: '1:840212992155:web:ba5ad8c6c44aa9600a763e',
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const fetchAllProducts = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'products'));
  const fetchProducts = [];
  querySnapshot.forEach((docc) => (
    fetchProducts.push({
      id: docc.id,
      ...docc.data(),
    })));
  return fetchProducts;
};

const fetchProduct = async (id) => {
  const fetchedProduct = await getDoc(doc(firestore, 'products', id));
  return fetchedProduct.data();
};

const addProduct = async ({
  name, weight, imageUrl, size, count,
}) => {
  await addDoc(collection(firestore, 'products'), {
    name,
    weight,
    imageUrl,
    size,
    count,
  });
  return fetchAllProducts();
};

const deleteProduct = async (id) => {
  await deleteDoc(doc(firestore, 'products', id));
  return fetchAllProducts();
};

export {
  fetchAllProducts, fetchProduct, deleteProduct, addProduct,
};
