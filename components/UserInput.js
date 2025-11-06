import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import ItemLists from './ItemLists'

export default function UserInput() {

  const [item, setItem] = useState("");
  const [items,setItems] = useState([]);

  const addItem = ()=>{
    if (!item.trim()) return;
    const newItems = [...items, item ];
    setItems(newItems);
    setItem("");
  }

  const delItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput style={styles.input} 
        placeholder='Enter Item' 
        value={item}
        onChangeText={setItem}/>
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
      <ItemLists items={items} delItem={delItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    color:'white',
    backgroundColor:'#334155',
    marginHorizontal: 10,
    borderRadius:10,
    width:250,
    fontSize: 18,
    textAlign: 'center',
  },
  button:{
    backgroundColor:'#60A5FA',
    padding:15,
    paddingHorizontal:25,
    borderRadius:10,
  },
});
