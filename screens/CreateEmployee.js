import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';

const CreateEmployee = () => {
  const [name, seTname] = useState('');
  const [phone, seTphone] = useState('');
  const [email, seTemail] = useState('');
  const [modal, seTmodal] = useState('');
  const [salary, seTsalary] = useState('');
  const [picture, seTpicture] = useState('');

  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChange={(text) => seTname(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default CreateEmployee;
