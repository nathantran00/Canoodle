import React from 'react';
import { View, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import Ionicons from '@expo/vector-icons/Ionicons';


// https://react.dev/learn/passing-data-deeply-with-context
import { ExpensesProvider } from './context/ExpensesContext';

import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import ExpenseListScreen from './screens/ExpenseListScreen';

//Create Stack and Tab navigators using their predefined functions
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define a custom button component
// children: the elements to be displayed inside the button
// onPress: the function to be executed when the button is pressed
const CustomAddButton = ({ children, onPress }) => (
  // TouchableOpacity to make the button pressable
  <TouchableOpacity
    // Apply custom styles to the button
    style={styles.customButton}
    // Set the function to be executed when the button is pressed
    onPress={onPress}
  >
    {/* Wrap the children inside a View for additional styling or layout */}
    <View style={styles.customButtonView}>
      {/* Render the children inside the View */}
      {children}
    </View>
  </TouchableOpacity>
);

// Provides tabs to navigate between the main areas of the app
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: '#FFFFFF', // White for active tab label and icon
        tabBarInactiveTintColor: '#5E57A6', // Purple for inactive tab label and icon
      }}
      sceneContainerStyle={{ backgroundColor: '#E9D9C9' }} // Style for the view wrapping each screen
    >
      
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add an Expense"
        component={AddExpenseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // Wrap the icon in the custom button view for styling
            <View style={styles.customButton}>
              <Ionicons
                name="add-circle"
                size={60}
                color={focused ? '#FFFFFF' : '#5E57A6'} // White when focused, purple when not
                style={styles.customButtonIcon} // Apply custom styles for icon positioning
              />
            </View>
          ),
          tabBarLabel: '', // No label for the middle button
        }}
      />


      <Tab.Screen
        name="Expenses"
        component={ExpenseListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// App component with Stack Navigator (containing the Tab Navigator)
export default function App() {

  // Load the fonts
  let [fontsLoaded] = useFonts({
    'Dillan': require('./assets/fonts/Dillan.otf'),
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono.ttf'),
  });

  // Show a loading screen while the fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#F5A2C4' />
      </View>
    );
  }


  return (
    <ExpensesProvider>
      <NavigationContainer>

        {/* The top level navigator */}
        <Stack.Navigator initialRouteName="Welcome">
          {/* Welcome Screen stack item */}
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          {/* The Main App */}
          <Stack.Screen
            name="MainApp" // Route name you navigate to from WelcomeScreen
            component={TabNavigator} // Tab Navigation within the Main App to go between functional app screens
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesProvider>
  );
}

const styles = StyleSheet.create({
  customButton: {
    position: 'absolute',
    bottom: -35,
    alignSelf: 'center',
    backgroundColor: '#F5A2C4',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  customButtonIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#F5A2C4',
    paddingBottom: 10,
    paddingTop: 10,
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 18,
    fontFamily: 'Dillan',
  },
});