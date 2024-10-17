import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { amber, black, white, blue } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
const Header = (props) => {
    const [search, setSearch] = useState()
    const onChangeHandler = (e) =>{
        setSearch(e)
    }
  return (
    <View
    className = 'justify-between items-center w-full' 
    style={styles.container}>
      <Text className={`text-white pt-3 font-bold`}>Fetch Countries</Text>
      <View
      className='w-[60%] flex-row justify-between items-center bg-amber-200 rounded-lg h-8 mb-2'>
        <TextInput 
        className ='w-[80%] pl-2'
        value={search}
        onChangeText={onChangeHandler}
        placeholder='Search...'>
        </TextInput>
        
            <Link href={{
                pathname:'/[country].jsx',
                params:{name:search}
            }}>
                <Ionicons name='search' size={20}/>
            </Link>
            
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:blue,
        height:80,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        zIndex:1
    }
})