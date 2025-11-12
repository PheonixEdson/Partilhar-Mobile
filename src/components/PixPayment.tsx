import React, {useState} from "react";
import { Card, TextInput, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
export default function PixPayment({ amount, onPay }: any) {
  const [cpf, setCpf] = useState(""); const amt = amount || 0;
  return (<Card style={styles.card}><Card.Content><TextInput label="Chave (CPF/Celular)" value={cpf} onChangeText={setCpf} style={styles.input} mode="outlined" /><Button mode="contained" onPress={()=>{ if (onPay) onPay(); }}>Pagar com PIX - R$ {amt.toFixed(2)}</Button></Card.Content></Card>);
}
const styles = StyleSheet.create({ card:{ padding:8 }, input:{ marginBottom:12 } });