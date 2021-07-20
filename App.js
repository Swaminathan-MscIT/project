import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mobiles from './Screeens/Mobiles';
import Laptops from './Screeens/Laptops';
import TV from './Screeens/TV';



const Drawer = createDrawerNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Mobiles" component={Mobiles} />
        <Drawer.Screen name="Laptops" component={Laptops} />
        <Drawer.Screen name="TV" component={TV} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;


