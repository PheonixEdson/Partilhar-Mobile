import React, {useState} from "react";
import { View, Alert, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { v4 as uuidv4 } from "uuid";
export default function SubscriberForm({ onSubmit, onCancel }: any) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [phone, setPhone] = useState("");
  const handleSubmit = () => { if (!name.trim()) { Alert.alert("Erro","Nome é obrigatório"); return; } const s = { id: uuidv4(), name: name.trim(), email: email.trim() || undefined, phone: phone.trim() || undefined }; onSubmit(s); };
  return (<View style={styles.container}><TextInput label="Nome" value={name} onChangeText={setName} style={styles.input} mode="outlined" /><TextInput label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} mode="outlined" /><TextInput label="Telefone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} mode="outlined" /><Button mode="contained" onPress={handleSubmit}>Salvar</Button><View style={{height:8}}/><Button mode="outlined" onPress={onCancel}>Cancelar</Button></View>); }
const styles = StyleSheet.create({ container:{flex:1,padding:8}, input:{marginBottom:12} });