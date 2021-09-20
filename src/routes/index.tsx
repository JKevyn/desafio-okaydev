import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Notes from '../pages/Notes';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import CreateNote from '../pages/CreateNote';
import ViewNote from '../pages/ViewNote';

const Pages = createNativeStackNavigator();

const PagesRoutes: React.FC = () => (
  <Pages.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: '#17181F' },
    }}
  >
    <Pages.Screen name="Home" component={Home} />
    <Pages.Screen name="Notes" component={Notes} />
    <Pages.Screen name="Favorites" component={Favorites} />
    <Pages.Screen name="CreateNote" component={CreateNote} />
    <Pages.Screen name="ViewNote" component={ViewNote} />
  </Pages.Navigator>
);


export default PagesRoutes;