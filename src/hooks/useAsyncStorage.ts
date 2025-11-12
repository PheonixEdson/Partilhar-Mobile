import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function useAsyncStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  useEffect(() => { (async () => { try { const raw = await AsyncStorage.getItem(key); if (raw) setState(JSON.parse(raw)); } catch (e) { console.warn(e); } })(); }, [key]);
  useEffect(() => { AsyncStorage.setItem(key, JSON.stringify(state)).catch(()=>{}); }, [key, state]);
  return [state, setState] as const;
}