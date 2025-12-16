
import { db } from './firebase.js';
import { error } from 'console';


import { collection, doc, getDoc, getDocs, addDoc, deleteDoc,updateDoc} from 'firebase/firestore'; 

const productsCollection = collection(db,"products")

export const getAllProducts = async () => {
    try{
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));

    }catch (error){
        console.error(error);
    }
}

export const getProdById = async (id) => {
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;

    }catch (error){
        console.error(error);
    }
}

export const createProd = async (data) => {
    try{
         
        const doctRef = await addDoc(productsCollection, data);
        return {id: doctRef.id, ...data} 

    }catch (error){
        console.error(error);
    }

}

export const deleteProd = async (id) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapshot = await getDoc(productRef);

        if ((!snapshot.exists())) {
            return false;
        }
        await deleteDoc(productRef);
        return true


    } catch (error) {
        console.error(error)
    }

};


export const updateProd = async (id, productData) => {
  try {
    
    const docRef = doc(productsCollection, id);

    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return false; 
    }

    await updateDoc(docRef, productData);

    return { id: docRef.id, ...productData };

  } catch (error) {
    console.error(error);
    
  }
};
