import React from "react"
import {createNativeStackNavigator} from "react-native-screens/native-stack"

import {Scene} from "./Scene"
import {Feed} from "../scenes"

type StackParamList = {
  [Scene.FEED]: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Scene.FEED} component={Feed} />
    </Stack.Navigator>
  )
}

export default HomeNavigation
