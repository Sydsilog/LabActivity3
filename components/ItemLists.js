import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react'

export default function ItemLists({items, delItem}) {
  return (
    <View style={styles.container}>
      {items.map((item, index)=>(
        <TouchableOpacity onPress={()=> delItem(index)} style={styles.press} >
          <Text key={index} style={styles.text} >{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  press:{
    alignItems: "center",
    width: "90%",
    marginVertical: 4
  },
  text: {
    color:'white',
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: "#334155",
    width: "100%",
  },
});
