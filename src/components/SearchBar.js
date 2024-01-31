import {View,Text,StyleSheet,TextInput} from 'react-native';
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.barckgroundStyle}>
    <FontAwesome name="search" style={styles.icon}  />

   <TextInput autoCapitalize='none'
   autoCorrect={false}
   style={styles.inputStyle} placeholder='Search'
   value={term}
   onChangeText={onTermChange}
   onEndEditing={onTermSubmit}
   />   
    </View>
  )
}
const styles = StyleSheet.create({
    
    barckgroundStyle:{
        marginTop:15,
        backgroundColor:'#f0eeee',
        height:50,
        marginHorizontal:15,
        borderRadius:5,
        flexDirection:'row',
        marginBottom:15,
      },
      icon:{
        fontSize:30,
         color:"black",
         alignSelf:'center',
         marginHorizontal:15
      },
      inputStyle:{
        fontSize:18,
        flex:1
      }
      


})
export default SearchBar