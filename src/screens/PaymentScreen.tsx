import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import PixPayment from "../components/PixPayment";
import { useApp } from "../contexts/AppContext";
export default function PaymentScreen() {
  const { sales } = useApp();
  const lastSale = sales[sales.length - 1];
  const amount = lastSale ? lastSale.total : 0;
  return (<SafeAreaView style={{flex:1}}><Appbar.Header><Appbar.Content title="Pagamento" /></Appbar.Header><SafeAreaView style={styles.container}><PixPayment amount={amount} onPay={()=>{}} /></SafeAreaView></SafeAreaView>); }
const styles = StyleSheet.create({ container: { flex:1, padding:16 } });