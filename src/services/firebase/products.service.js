import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestoreDb } from "./firebase";

const COLLECTION_NAME = "products";

export async function getProducts() {
  const snapshot = await getDocs(collection(firestoreDb, COLLECTION_NAME));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createProduct(product) {
  const productToSave = {
    name: product.name ?? "",
    brand: product.brand ?? "",
    category: product.category ?? "",
    price: Number(product.price ?? 0),
    stock: Number(product.stock ?? 0),
    image: product.image ?? "",
    createdAt: Date.now(),
  };

  const docRef = await addDoc(
    collection(firestoreDb, COLLECTION_NAME),
    productToSave
  );

  return {
    id: docRef.id,
    ...productToSave,
  };
}

export async function importProducts(products) {
  const savedProducts = [];

  for (const product of products) {
    const saved = await createProduct(product);
    savedProducts.push(saved);
  }

  return savedProducts;
}