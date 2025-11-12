import React, {useState} from "react";
import { SafeAreaView, View, Modal, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { useApp } from "../contexts/AppContext";
import SalesList from "../components/SalesList";
import SalesForm from "../components/SalesForm";
export default function SalesScreen({ navigation }: any) {
  const { sales, addSale, removeSale, products } = useApp();
  const [modalVisible, setModalVisible] = useState(false);
  return (<SafeAreaView style={{flex:1}}><Appbar.Header><Appbar.BackAction onPress={()=>navigation.goBack()} /><Appbar.Content title="Vendas" /><Appbar.Action icon="plus" onPress={()=>setModalVisible(true)} /></Appbar.Header><View style={styles.container}><SalesList sales={sales} onDelete={removeSale} /></View><Modal visible={modalVisible} animationType="slide"><SafeAreaView style={{flex:1}}><SalesForm products={products} onSubmit={(s)=>{ addSale(s); setModalVisible(false); }} onCancel={()=>setModalVisible(false)} /></SafeAreaView></Modal></SafeAreaView>); }
const styles = StyleSheet.create({ container: { flex:1, padding:16 } });