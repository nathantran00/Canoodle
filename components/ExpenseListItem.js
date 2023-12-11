// Necessary imports
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';


// ExpenseListItem component (individual expense item)
const ExpenseListItem = ({ item }) => {

  // Map each category to an icon
  const iconMap = {
    'Food & Dining': 'utensils',
    'Health & Wellness': 'heartbeat',
    'Entertainment': 'film',
    'Housing & Utilities': 'home',
    'Transportation': 'car',
    'Shopping & Misc': 'shopping-bag',
  };

  return (
    <ListItem bottomDivider containerStyle={styles.itemContainer}>
      <Icon
        name={iconMap[item.category]}
        type="font-awesome-5"
        color={styles.iconColor}
        size={24}
      />

      {/* Render the date, name, and category, and price */}
      <ListItem.Content style={styles.content}>
        <Text style={styles.dateText}>{item.date}</Text>
        <ListItem.Title style={styles.titleText}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.category}>{item.category}</ListItem.Subtitle>
      </ListItem.Content>
      <Text style={styles.amountText}>{`$${item.amount.toFixed(2)}`}</Text>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFF8F1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.32,
    shadowRadius: 2.02,
    elevation: 4,

  },
  titleText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000',
    fontFamily: 'JetBrainsMono',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F5A2C4',
    fontFamily: 'JetBrainsMono',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FF0000',
    fontFamily: 'JetBrainsMono',
  },
  category: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'JetBrainsMono',
    color: '#5E57A6',
  },
});

export default ExpenseListItem;
