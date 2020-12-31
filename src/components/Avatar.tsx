import React from "react"
import FastImage, {FastImageProps} from "react-native-fast-image"
import {scale} from "react-native-size-matters"

type Props = FastImageProps & {
  size?: number
  cornerRadius?: number
}

function Avatar({size = 36, cornerRadius = 4, ...rest}: Props) {
  return (
    <FastImage
      style={{
        width: scale(size),
        height: scale(size),
        borderRadius: scale(cornerRadius)
      }}
      {...rest}
    />
  )
}

export default Avatar
