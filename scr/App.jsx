import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./screens/homeScreen";

const TabTop = createMaterialTopTabNavigator
();
export default function App() {
    return (
      <NavigationContainer>
          <TabTop.Navigator>
              <TabTop.Screen name="Home" component={HomeScreen} />
          </TabTop.Navigator>
      </NavigationContainer>
    );
}
