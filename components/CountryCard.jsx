import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { amber } from '@/constants/Colors';
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'expo-router';
const CountryCard = ({continent }) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchCountries(continent)
      },[])
      const fetchCountries = async ()=>{
        try{
          const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`)
          setData(response.data)
          return response.data
        }catch(err){
          alert(err)
        }
      }

  return (
<ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center'}} horizontal={true} className='h-[120px] space-x-3' >
      {data.map((element, index) => (
        <Link href={{
          pathname:'/[country].jsx',
          params:{name:element.name.common}/*  */
        }}>
          <View 
          className=' bg-slate-800 items-center min-w-[120px] h-full rounded-lg pt-2'
          key={index} style={styles.card}>
              <Image width={50} height={50} source={{ uri: element.flags.png }} />
              <Text className='text-amber-300 font-semibold'>{element.name.common}</Text>
              <Text className='text-amber-500'>{element.capital}</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
});
