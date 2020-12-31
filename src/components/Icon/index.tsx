import React from "react"
import {SvgProps} from "react-native-svg"
import {scale} from "react-native-size-matters"

import Chat from "./svg/Chat.svg"
import Like from "./svg/Like.svg"
import More from "./svg/More.svg"
import Next from "./svg/Next.svg"
import Search from "./svg/Search.svg"

type IconName = "chat" | "like" | "more" | "next" | "search"

type Props = {
  name: IconName
  size?: number
}

function Icon({name, size = 24}: Props) {
  const props: SvgProps = {width: scale(size), height: scale(size)}
  switch (name) {
    case "chat":
      return <Chat {...props} />
    case "like":
      return <Like {...props} />
    case "more":
      return <More {...props} />
    case "next":
      return <Next {...props} />
    case "search":
      return <Search {...props} />
    default:
      return null
  }
}

export default Icon
