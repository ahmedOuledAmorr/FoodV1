import { View, Text ,Button, ScrollView} from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../src/components/SearchBar'
import UseRestaurants from '../src/hooks/UseRestaurants'
import ResultsList from '../src/components/ResultsList'


const SearchScreen = ({ navigation }) => {
  const [term,setTerm]=useState('');
  const [result,errorMessage,searchApi]=UseRestaurants();
  const filterResults =(price)=>{
     return result.filter(results=> {
      return results.price===price;
    })
  }
  
  return (
    
    <>
    <SearchBar term={term} 
    onTermChange={setTerm}
    onTermSubmit={()=>searchApi(term)}
    />
    {errorMessage ? <Text>{errorMessage}</Text>:null}    
    
      <ScrollView>
      <ResultsList result={filterResults('$')} navigation={navigation} title='Cost Effective'/>
      <ResultsList result={filterResults('$$')} navigation={navigation} title='Bit Pricier'/>
      <ResultsList result={filterResults('$$$')} navigation={navigation} title='Bit Spender'/>
      </ScrollView>
    </>
    
  )
}


export default SearchScreen