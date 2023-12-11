// Neccessary imports
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Custom components
import ExpenseListItem from '../components/ExpenseListItem';
import ItemSeparator from '../components/ItemSeparator';

// Import context
import { ExpensesContext } from '../context/ExpensesContext';

const ExpenseListScreen = () => {
    // Call useContext here to get expenses from ExpensesContext
    const { expenses } = useContext(ExpensesContext);
  
    // Render each item in the list using ExpenseListItem
    // KeyExtractor is set to use the id of each item from expensesData.js for efficiency
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Expense List Screen</Text>
        <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={expenses}
        renderItem={({ item }) => <ExpenseListItem item={item} />}
        ItemSeparatorComponent={ItemSeparator} // Use the separator component
      />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#E9D9C9',

    },
    header: {
      fontSize: 28,
      fontFamily: 'Dillan',
      color: '#5E57A6',
      fontWeight: 'bold',
      marginBottom: 20,
    },

  });
  

export default ExpenseListScreen;
