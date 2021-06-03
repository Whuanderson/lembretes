import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HeaderProps {
  onDarkMode: (darkMode: boolean) => void;
  darkModeState: boolean;
}

export function Header({ onDarkMode, darkModeState}: HeaderProps) {
  const [styles, setStyles] = useState(stylesLight);
  const [darkMode, setDarkMode] = useState(darkModeState);

  function handleDarkMode() {
    let newstatus = !darkMode;
    onDarkMode(newstatus);
    setDarkMode(newstatus);
    setStyles(newstatus ? stylesDark : stylesLight);
  }

    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const stylesLight = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
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
  }
});

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: '#483C67',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  }
});
