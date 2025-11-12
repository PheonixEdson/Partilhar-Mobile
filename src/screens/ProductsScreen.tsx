import React, {useState} from "react";
import { SafeAreaView, View, Modal, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { useApp } from "../contexts/AppContext";
export default function ProductsScreen({ navigation }: any) {
  const { products, addProduct, removeProduct } = useApp();
  const [modalVisible, setModalVisible] = useState(false);
  return (<SafeAreaView style={{flex:1}}><Appbar.Header><Appbar.Content title="Produtos" /><Appbar.Action icon="cart" onPress={()=>navigation.navigate("Sales")} /></Appbar.Header><View style={styles.container}><ProductList products={products} onDelete={removeProduct} /><Button mode="contained" onPress={()=>setModalVisible(true)}>Adicionar produto</Button></View><Modal visible={modalVisible} animationType="slide"><SafeAreaView style={{flex:1}}><ProductForm onSubmit={(p)=>{ addProduct(p); setModalVisible(false); }} onCancel={()=>setModalVisible(false)} /></SafeAreaView></Modal></SafeAreaView>); }
const styles = StyleSheet.create({ container: { flex:1, padding:16 } });