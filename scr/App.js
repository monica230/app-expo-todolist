import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TabTop = createMaterialTopTabNavigator
();
export default function App() {
  return (
  <NavigationContainer>
    <TabTop.Navigator>
      <TabTop.Screen name="Home" component={HomeScreen} />
      <TabTop.Screen name="Profile" component={ProfileScreen} />
    </TabTop.Navigator>
  </NavigationContainer>
  );
}
