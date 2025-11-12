import React from "react";
import { FlatList, Alert, StyleSheet } from "react-native";
import { Card, IconButton } from "react-native-paper";
export default function SalesList({ sales, onDelete }: any) {
  return (<FlatList data={sales} keyExtractor={item=>item.id} renderItem={({item})=>(<Card style={styles.card}><Card.Title title={`Venda - ${new Date(item.date).toLocaleString()}`} subtitle={`Produto ID: ${item.productId} — Qtd: ${item.quantity} — Total: R$ ${item.total.toFixed(2)}`} right={(props)=>(<IconButton {...props} icon="delete" onPress={()=>{ Alert.alert("Excluir venda", `Excluir venda feita em ${new Date(item.date).toLocaleString()}?`, [{text:"Cancelar", style:"cancel"}, {text:"OK", onPress: ()=> onDelete(item.id)}]); }} />)} /></Card>)} />);
}
const styles = StyleSheet.create({ card:{ marginBottom:8 } });