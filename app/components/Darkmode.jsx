import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState, useContext } from 'react'

import { EventRegister } from 'react-native-event-listeners'

import ThemeContext from 'theme/ThemeContext'

const Darkmode = () => {
  const theme = useContext(ThemeContext)
  const [mode, setMode] = useState(false)

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Dark Mode</Text>

      <Switch
        value={mode}
        onValueChange={(value) => {
          setMode(value)
          EventRegister.emit('themeChanged', value)
        }}
      />
    </View>
  )
}

export default Darkmode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
