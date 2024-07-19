import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Club from './Club'

const HomePage = () => {
  return (
    <ScrollView>
      <Club/>
      <Club/>
      <Club/>
    </ScrollView>
  )
}

export default HomePage