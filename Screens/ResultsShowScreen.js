import { View, Text,StyleSheet,Image ,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react';
import yelp from '../src/Api/yelp';


export default function  ResultsShowScreen({route}) {
  const[result,setResult]=useState(null)
  const [errorMessage,setErrorMessage]=useState('');
  const id =route.params.id;
  const searchWithId=async (id)=>{
    try{
  const response=await yelp.get(`/${id}`)
  setResult(response.data)
    }
    catch (err){
      setErrorMessage('Something wrong in the server',err)
    }

}
useEffect(()=>{
   searchWithId(id)
},[])
  return (
    <View>
      {result&&<Text>{result.name}</Text>}
      {errorMessage? <Text style={styles.erroMessage}>{errorMessage}</Text>:
      // result && result.photos.map(item=>(<Image key={item} style={styles.image} source={{uri:item} }/>) )}
      result && <FlatList
      keyExtractor={(photo)=>photo}
      data={result.photos}
      renderItem={({item})=>{
      return <Image style={styles.image} source={{uri:item}} />
      }}
      />}
    </View>
  )
}
const styles = StyleSheet.create({
  erroMessage:{ color: 'red',fontWeight:'bold',fontSize:30 },
  image:{ width: 200, height: 200 }
})