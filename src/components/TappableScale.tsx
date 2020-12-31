import React, {useRef} from "react"
import {Animated, Pressable, PressableProps} from "react-native"

type Props = PressableProps & {
  scaleFactor?: number
}

function TappableScale({scaleFactor = 0.98, ...rest}: Props) {
  const scale = useRef(new Animated.Value(1)).current

  function onPressIn() {
    Animated.spring(scale, {
      toValue: scaleFactor,
      useNativeDriver: true
    }).start()
  }

  function onPressOut() {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} {...rest}>
      <Animated.View style={{transform: [{scale}]}}>
        {rest.children}
      </Animated.View>
    </Pressable>
  )
}

export default TappableScale
