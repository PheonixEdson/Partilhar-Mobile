import React, {useState} from "react";
import { SafeAreaView, View, Modal, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";
import SubscribersList from "../components/SubscribersList";
import SubscriberForm from "../components/SubscriberForm";
import { useApp } from "../contexts/AppContext";
export default function SubscribersScreen() {
  const { subscribers, addSubscriber, removeSubscriber } = useApp();
  const [modalVisible, setModalVisible] = useState(false);
  return (<SafeAreaView style={{flex:1}}><Appbar.Header><Appbar.Content title="Assinantes" /><Appbar.Action icon="account-plus" onPress={()=>setModalVisible(true)} /></Appbar.Header><View style={styles.container}><Button mode="contained" onPress={()=>setModalVisible(true)}>Novo assinante</Button><SubscribersList subscribers={subscribers} onDelete={removeSubscriber} /></View><Modal visible={modalVisible} animationType="slide"><SafeAreaView style={{flex:1}}><SubscriberForm onSubmit={(s)=>{ addSubscriber(s); setModalVisible(false); }} onCancel={()=>setModalVisible(false)} /></SafeAreaView></Modal></SafeAreaView>); }
const styles = StyleSheet.create({ container: { flex:1, padding:16 } });