import React, {useRef} from "react"
import {Animated, Pressable, PressableProps} from "react-native"

type Props = PressableProps & {
  activeOpacity?: number
}

function TappableOpacity({activeOpacity = 0.8, ...rest}: Props) {
  const opacity = useRef(new Animated.Value(1)).current

  function onPressIn() {
    Animated.spring(opacity, {
      toValue: activeOpacity,
      useNativeDriver: true
    }).start()
  }

  function onPressOut() {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} {...rest}>
      <Animated.View style={{opacity}}>{rest.children}</Animated.View>
    </Pressable>
  )
}

export default TappableOpacity
