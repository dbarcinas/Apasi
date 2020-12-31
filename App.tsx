import "react-native-gesture-handler"

import React from "react"
import {ColorSchemeName, useColorScheme} from "react-native"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {ThemeProvider} from "@shopify/restyle"
import {NavigationContainer} from "@react-navigation/native"
import {enableScreens} from "react-native-screens"

import HomeNavigation from "./src/navigation/HomeNavigation"
import {theme, Theme, themeDark} from "./src/theme"

enableScreens()

function App() {
  const colorScheme: ColorSchemeName = useColorScheme()
  const systemTheme: Theme = colorScheme === "dark" ? themeDark : theme

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={systemTheme}>
        <NavigationContainer>
          <HomeNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
