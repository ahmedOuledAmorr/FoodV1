import { View, Text,StyleSheet, FlatList ,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail';

export default function ResultsList({title,result,navigation}) {
  if (!result.length){
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={result}
      keyExtractor={result=>result.id}
      renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('Detail',{id:item.id})}>
          <ResultsDetail results={item}/>
          </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,        
    },
    container:{
      marginBottom:10,

    }
})