// Necessary imports
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import { ButtonGroup, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // Dropdown picker



const AddExpenseScreen = ({ navigation }) => {
  
  // Define the states for the form inputs
  const [date, setDate] = useState(new Date()); // Set the default date to today
  const [amount, setAmount] = useState(''); // Set the default amount to an empty string
  const [category, setCategory] = useState(null); // Set the default category to null
  const [paidBy, setPaidBy] = useState(0); // Index of the selected button in ButtonGroup
  const [showDatePicker, setShowDatePicker] = useState(false); // Define the showDatePicker state here

  // List of categories for the dropdown picker
  const categories = [
    "Food & Dining",
    "Health & Wellness",
    "Entertainment",
    "Housing & Utilities",
    "Transportation",
    "Shopping & Misc",
  ];

  // Function to save the expense and navigate home
  const submitExpense = () => {
    // Submission feedback to user
    Alert.alert("Expense Added", "Your expense has been successfully added.");

    // Then, navigate back to the home screen
    navigation.navigate('Home');
  };

  // Function to handle date change and hide the picker when a date is selected
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); 
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add an Expense</Text>


      <View style={styles.formContainer}>
      {/* Input for the expense amount */}
      <Input
        placeholder='$ Expense Total'
        keyboardType='numeric'
        value={amount} // Set the value to the amount state
        onChangeText={setAmount} // Set the amount state to the input value
        inputContainerStyle={styles.input}
      />

      {/* Picker for the expense category */}
      <Picker
        selectedValue={category} // Set the selected value to the category state
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)} // Set the category state to the selected value
        style={styles.picker}
      >
        {/* Category items within the dropdown menu/picker */}
        {categories.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
      </Picker>

      {/* Touchable opacity to show date picker */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text>Date</Text>
      </TouchableOpacity>

      {/* Date picker */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default" 
          onChange={onDateChange}
        />
      )}

      {/* ButtonGroup for selecting who paid */}
      <ButtonGroup
        buttons={['Nathan', 'X']}
        selectedIndex={paidBy}
        onPress={setPaidBy}
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.buttonGroup}
      />

      {/* Submit button */}
      <Button
        title="Submit Expense"
        onPress={submitExpense}
      />
      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9D9C9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    alignSelf: 'center',
  },
  formContainer: {
    height: '70%',
    backgroundColor: '#5E57A6',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 20,
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
  },
  picker: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  datePickerButton: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  buttonGroupContainer: {
    marginBottom: 15,
  },
  buttonGroup: {
  },
  submitButton: {
    backgroundColor: '#FF6347',
    borderRadius: 5,
    padding: 15,
  },
});

export default AddExpenseScreen;