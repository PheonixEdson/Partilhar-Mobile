import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product, Sale, Subscriber } from "../lib/types";

type AppState = { products: Product[]; sales: Sale[]; subscribers: Subscriber[];
  addProduct: (p: Product)=>void; removeProduct: (id: string)=>void;
  addSale: (s: Sale)=>void; removeSale: (id: string)=>void;
  addSubscriber: (s: Subscriber)=>void; removeSubscriber: (id: string)=>void; };

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(()=>{ (async ()=>{ try {
    const p = await AsyncStorage.getItem("@app:products"); const s = await AsyncStorage.getItem("@app:sales"); const subs = await AsyncStorage.getItem("@app:subscribers");
    if (p) setProducts(JSON.parse(p)); if (s) setSales(JSON.parse(s)); if (subs) setSubscribers(JSON.parse(subs));
  } catch(e){ console.warn(e); }})(); },[]);

  useEffect(()=>{ AsyncStorage.setItem("@app:products", JSON.stringify(products)).catch(()=>{}); }, [products]);
  useEffect(()=>{ AsyncStorage.setItem("@app:sales", JSON.stringify(sales)).catch(()=>{}); }, [sales]);
  useEffect(()=>{ AsyncStorage.setItem("@app:subscribers", JSON.stringify(subscribers)).catch(()=>{}); }, [subscribers]);

  const addProduct = (p: Product) => setProducts(prev=>[...prev, p]);
  const removeProduct = (id: string) => setProducts(prev=>prev.filter(x=>x.id!==id));

  const addSale = (s: Sale) => {
    setSales(prev=>[...prev, s]);
    setProducts(prev => prev.map(p => { if (p.id === s.productId) { const newQty = (p.quantity || 0) - s.quantity; return { ...p, quantity: newQty >= 0 ? newQty : 0 }; } return p; }));
  };
  const removeSale = (id: string) => setSales(prev=>prev.filter(x=>x.id!==id));

  const addSubscriber = (s: Subscriber) => setSubscribers(prev=>[...prev, s]);
  const removeSubscriber = (id: string) => setSubscribers(prev=>prev.filter(x=>x.id!==id));

  return (<AppContext.Provider value={{ products, sales, subscribers, addProduct, removeProduct, addSale, removeSale, addSubscriber, removeSubscriber }}>{children}</AppContext.Provider>);
};

export const useApp = () => { const ctx = useContext(AppContext); if (!ctx) throw new Error("useApp must be used within AppProvider"); return ctx; };