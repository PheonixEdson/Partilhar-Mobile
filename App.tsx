import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppProvider } from "./src/contexts/AppContext";
import ProductsScreen from "./src/screens/ProductsScreen";
import SalesScreen from "./src/screens/SalesScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import SubscribersScreen from "./src/screens/SubscribersScreen";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Provider as PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <AppProvider>
      <PaperProvider>
        <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
          <Tab.Navigator initialRouteName="Products" screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let name = "home";
              if (route.name === "Products") name = "pricetags";
              if (route.name === "Sales") name = "cart";
              if (route.name === "Subscribers") name = "people";
              if (route.name === "Payment") name = "cash";
              return <Ionicons name={name as any} size={size} color={color} />;
            }
          })}>
            <Tab.Screen name="Products" component={ProductsScreen} options={{ title: "Produtos" }} />
            <Tab.Screen name="Sales" component={SalesScreen} options={{ title: "Vendas" }} />
            <Tab.Screen name="Payment" component={PaymentScreen} options={{ title: "Pagamento" }} />
            <Tab.Screen name="Subscribers" component={SubscribersScreen} options={{ title: "Assinantes" }} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
}