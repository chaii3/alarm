import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import AlarmRunner from './src/helpers/AlarmRunner';

import AlarmsList from './src/views/AlarmsList';
import CreateAlarm from './src/views/CreateAlarm';

const App = () => {
  const Stack = createNativeStackNavigator<any>();
  const y = new AlarmRunner();

  useEffect(() => {
    console.log('check');
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={AlarmsList}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={'Create'}
          component={CreateAlarm}
          options={{title: 'Create'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
