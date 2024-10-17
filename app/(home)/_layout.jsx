import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PagesLayout = () => {
    
  return (
    <Stack>
        <Stack.Screen name='country'/>
    </Stack>
  )
}

export default PagesLayout

const styles = StyleSheet.create({})