import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, TouchableOpacityProps, GestureResponderEvent } from 'react-native';

interface headerProps {
  onDarkMode: (darkMode: boolean) => void;
  darkModeState: boolean;
}

export function Header({ onDarkMode, darkModeState }: headerProps) {
  const [styles, setStyles] = useState(stylesLight);
  const [darkMode, setDarkMode] = useState(darkModeState);

  function handleDarkMode() {
    let newstatus = !darkMode;
    onDarkMode(newstatus);
    setDarkMode(newstatus);
    setStyles(newstatus ? stylesDark : stylesLight);
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity 
      style={styles.buttonTheme} 
      onPress={handleDarkMode}>
        <Text style={styles.buttonThemeText}>Mudar Tema</Text>
      </TouchableOpacity>
    </View>
  )
}

const stylesLight = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    backgroundColor:'#520452',
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonThemeText: {
  color: '#FFF',
  fontWeight: 'bold',
  fontSize:  11
  }
});

const stylesDark = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    backgroundColor: "#322ff0",
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonThemeText: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 11
  }
});