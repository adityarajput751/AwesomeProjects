import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Main from './src/Main'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Main />
    </SafeAreaView>
  )
}

export default App