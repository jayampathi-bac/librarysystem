
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login/login';
import Update from '../screens/update/updateForm';
import Dash from '../screens/dash/dash';



const Stack = createStackNavigator();

function App() {
     return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;