import React, {useState} from "react";
import { View, Alert, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { v4 as uuidv4 } from "uuid";
export default function ProductForm({ onSubmit, onCancel }: any) {
  const [name, setName] = useState(""); const [price, setPrice] = useState("0"); const [quantity, setQuantity] = useState("1");
  const handleSubmit = () => { if (!name.trim()) { Alert.alert("Erro","Nome é obrigatório"); return; } const p = { id: uuidv4(), name: name.trim(), price: Number(price)||0, quantity: Number(quantity)||0 }; onSubmit(p); };
  return (<View style={styles.container}><TextInput label="Nome" value={name} onChangeText={setName} style={styles.input} mode="outlined" /><TextInput label="Preço" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} mode="outlined" /><TextInput label="Quantidade" value={quantity} onChangeText={setQuantity} keyboardType="numeric" style={styles.input} mode="outlined" /><Button mode="contained" onPress={handleSubmit}>Salvar</Button><View style={{height:8}}/><Button mode="outlined" onPress={onCancel}>Cancelar</Button></View>);
}
const styles = StyleSheet.create({ container:{flex:1,padding:8}, input:{marginBottom:12} });