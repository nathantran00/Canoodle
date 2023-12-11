// Neccessary imports
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

// Import context
import { ExpensesContext } from '../context/ExpensesContext';

// Custom components
import ExpenseListItem from '../components/ExpenseListItem';
import ItemSeparator from '../components/ItemSeparator';


const DashboardScreen = () => {
  // Call useContext here to get expenses from ExpensesContext
  // So we can use it to render information on the list
  const { expenses } = useContext(ExpensesContext);

  // Function to render each item in the list
  const renderItem = ({ item }) => {
    
    // Map each category to a FontAwesome icon
    const iconMap = {
      'Food & Dining': 'utensils',
      'Health & Wellness': 'heartbeat',
      'Entertainment': 'film',
      'Housing & Utilities': 'home',
      'Transportation': 'car',
      'Shopping & Misc': 'shopping-bag',
    };

    // Return a ListItem component with the appropriate information
    return (
      <ListItem bottomDivider>
        <Icon name={iconMap[item.category]} type="font-awesome-5" />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.category}</ListItem.Subtitle>
          <Text style={styles.dateText}>{item.date}</Text>
        </ListItem.Content>
        <Text style={styles.amountText}>{`$${item.amount.toFixed(2)}`}</Text>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Weekly Overview</Text>
      <View style={styles.overviewContainer}>
        {/* First Graph Section */}
        <View style={styles.graphSection}>
          <Text style={styles.graphHeader}>Your Expenses</Text>
          <View style={styles.graphPlaceholder}>
            <Text style={styles.placeholderText}>Placeholder Graph</Text>
          </View>
        </View>
        {/* Second Graph Section */}
        <View style={styles.graphSection}>
          <Text style={styles.graphHeader}>X's Expenses</Text>
          <View style={styles.graphPlaceholder}>
            <Text style={styles.placeholderText}>Placeholder Graph</Text>
          </View>
        </View>
      </View>
      <Text style={styles.header}>Recent Expenses</Text>
      <FlatList
        // Set the keyExtractor to use the id of each item from expensesData.js for efficiency
        keyExtractor={(item) => item.id.toString()}
        data={expenses}
        renderItem={({ item }) => <ExpenseListItem item={item} />}
        ItemSeparatorComponent={ItemSeparator}
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
  greeting: {
    fontSize: 28,
    fontFamily: 'Dillan',
    color: '#5E57A6',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#5E57A6',
    height: 215,
    borderRadius: 20,
    padding: 20,
  },
  graphSection: {
    alignItems: 'center',
  },
  graphHeader: {
    color: '#F5A2C4',
    fontFamily: 'Dillan',
    fontSize: 18,
    marginBottom: 10,
  },
  graphPlaceholder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#F5A2C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  placeholderText: {
    textAlign: 'center',
    lineHeight: 100,
    fontSize: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DashboardScreen;