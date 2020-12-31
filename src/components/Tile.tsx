import React from "react"
import {BoxProps} from "@shopify/restyle"

import Box from "./Box"
import TappableOpacity from "./TappableOpacity"
import Text from "./Text"
import {Theme} from "../theme"

type Props = BoxProps<Theme> & {
  title?: string
  subtitle?: string
  leading?: () => React.ReactNode
  trailing?: () => React.ReactNode
  onPress?: () => void
}

function Tile({title, subtitle, leading, trailing, onPress, ...rest}: Props) {
  return (
    <TappableOpacity activeOpacity={0.9} onPress={onPress}>
      <Box padding="m" {...rest}>
        <Box flexDirection="row" alignItems="center">
          {leading && <Box marginRight="m">{leading()}</Box>}
          <Box
            flex={1}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Box flex={1}>
              {title && (
                <Text variant="tileTitle" numberOfLines={1}>
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text variant="tileSubtitle" numberOfLines={1}>
                  {subtitle}
                </Text>
              )}
            </Box>
            {trailing && trailing()}
          </Box>
        </Box>
      </Box>
    </TappableOpacity>
  )
}

export default Tile
