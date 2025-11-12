import React from "react";
import { FlatList, Alert, StyleSheet } from "react-native";
import { Card, IconButton } from "react-native-paper";
export default function SubscribersList({ subscribers, onDelete }: any) {
  return (<FlatList data={subscribers} keyExtractor={item=>item.id} renderItem={({item})=>(<Card style={styles.card}><Card.Title title={item.name} subtitle={item.email ?? item.phone} right={(props)=>(<IconButton {...props} icon="delete" onPress={()=>{ Alert.alert("Excluir", `Excluir assinante ${item.name}?`, [{text:"Cancelar", style:"cancel"}, {text:"OK", onPress: ()=> onDelete(item.id)}]); }} />)} /></Card>)} />); }
const styles = StyleSheet.create({ card:{ marginBottom:8 } });