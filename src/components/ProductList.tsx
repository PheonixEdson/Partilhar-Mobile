import React from "react";
import { FlatList, Alert, StyleSheet } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { Product } from "../lib/types";
export default function ProductList({ products, onDelete }: { products: Product[]; onDelete: (id:string)=>void }) {
  return (<FlatList data={products} keyExtractor={item=>item.id} renderItem={({item})=>(
      <Card style={styles.card}><Card.Title title={item.name} subtitle={`R$ ${item.price.toFixed(2)} — Qtd: ${item.quantity ?? 0}`} right={(props)=>(
        <IconButton {...props} icon="delete" onPress={()=>{ Alert.alert("Excluir", `Excluir ${item.name}?`, [{text:"Cancelar", style:"cancel"}, {text:"OK", onPress: ()=> onDelete(item.id)}]); }} />)} /></Card>
  )} />);
}
const styles = StyleSheet.create({ card:{ marginBottom:8 } });