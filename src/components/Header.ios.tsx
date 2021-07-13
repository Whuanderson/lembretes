import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface HeaderProps {
  onDarkMode: (darkMode: boolean) => void;
  darkModeState: boolean;
}

export function Header({ onDarkMode, darkModeState }: HeaderProps) {
  const toggleSwitch = () => handleDarkMode();
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
        <View style={{ position: 'absolute', right: 10 }} >
          <Switch
            trackColor={{ false: "#E1E1E6", true: "#520452" }}
            thumbColor={darkMode ? "#FF79C6" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkMode}
          />
          <Text style={styles.buttonThemeText}>Mudar Tema</Text>
        </View>
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
  },
  buttonThemeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 11
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
