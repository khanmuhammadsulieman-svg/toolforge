import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DocumentsScreen from './screens/DocumentsScreen';
import ScannerScreen from './screens/ScannerScreen';
import EditScreen from './screens/EditScreen';
import ExcelScreen from './screens/ExcelScreen';
import HistoryScreen from './screens/HistoryScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'description';
            if (route.name === 'Scanner') iconName = 'camera-alt';
            else if (route.name === 'Edit') iconName = 'edit';
            else if (route.name === 'Excel') iconName = 'table-chart';
            else if (route.name === 'History') iconName = 'history';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Documents" component={DocumentsScreen} />
        <Tab.Screen name="Scanner" component={ScannerScreen} />
        <Tab.Screen name="Edit" component={EditScreen} />
        <Tab.Screen name="Excel" component={ExcelScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
