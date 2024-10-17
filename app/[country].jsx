import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { TouchableOpacity } from 'react-native'
const Country = () => {
    const { name } = useLocalSearchParams()
    const endpoint = `https://restcountries.com/v3.1/name/${name}`
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetchCountry()
    },[])
    const fetchCountry = async ()=>{
      try{
        const response = await axios.get(endpoint)
        setCountry(response.data)
        setLoading(false)
        return response.data
      }catch(err){
        alert(err)
      }
    }/*  */
  return (
    <View className='justify-center items-center bg-slate-900 rounded-xl mt-4' style={{
      marginTop:StatusBar.currentHeight
    }}>
      {/* Loading view */}
      <View>{loading ? (<Text>Loading...</Text>):null}</View>
      {country.map((element, index)=>(
        <View key={index} className='items-center mt-1 space-y-2'>
          <Text className = 'text-amber-200 font-bold text-xl'>{element.name.common}</Text>
          <Image width={70} height={50} source={{ uri: element.flags.png }} />
          <Text className = 'text-white font-bold'>Official name: <Text className='text-amber-200'>{element.name.official}</Text></Text>
          <Text className = 'text-white font-semibold'>Capital: <Text className='text-amber-200'>{element.capital}</Text></Text>
          <Text className = 'text-white font-semibold'>Continent: <Text className='text-amber-200'>{element.continents}</Text></Text>
          <Text className = 'text-white font-semibold'>Indipendence: <Text className='text-amber-200'>{element.independent ?"Independent":"Not independent"}</Text></Text>
          <Text className = 'text-white font-semibold'>UN Membership: <Text className='text-amber-200'>{element.unMember ?"UN Member":"Not a UN member"}</Text></Text>
          <Text className = 'text-white'>Region: <Text className='text-amber-200'>{element.region}</Text></Text>
          <Text className = 'text-white'>Sub Region: <Text className='text-amber-200'>{element.subregion}</Text></Text>
          <Text className = 'text-white'>Population: <Text className='text-amber-200'>{element.population}</Text></Text>
          <Text className = 'text-white'>Languages: <Text className='text-amber-200'>{`${Object.values(element.languages)}`}</Text></Text>
          {Object.keys(element.currencies).map((key) => (
          <View key={key} >
            <Text className='text-white'>Currency Code: <Text className='text-amber-200'>{key}</Text></Text>
            <Text className='text-white'>Currency Name: <Text className='text-amber-200'>{element.currencies[key].name}</Text></Text>
            <Text className='text-white'>Symbol: <Text className='text-amber-200'>{element.currencies[key].symbol}</Text></Text>
          </View>
      ))}
          <Text className = 'text-white'>Alternative names: {element.altSpellings.map((e,i)=>(<Text className='text-amber-200'>{`${e}\n`}</Text>))}</Text>
        </View>
      ))}
      <TouchableOpacity className='w-[50%] bg-amber-500 justify-center items-center h-12 mb-2 rounded-md'>

      <Link className='w-full text-center' href={'(tabs)'}>
          <Text>{loading ? "Loading...":'Go back'}</Text>
      </Link>
      </TouchableOpacity>
    </View>
  )
}

export default Country

const styles = StyleSheet.create({})