import {createTheme} from "@shopify/restyle"
import {scale} from "react-native-size-matters"

const palette = {
  // GRAY
  grayLight: "#9ca3af",
  grayPrimary: "#6b7280",
  grayDark: "#4b5563",
  // RED
  redLight: "#f87171",
  redPrimary: "#ef4444",
  redDark: "#dc2626",
  // YELLOW
  yellowLight: "#fbbf24",
  yellowPrimary: "#f59e0b",
  yellowDark: "#d97706",
  // GREEN
  greenLight: "#34d399",
  greenPrimary: "#10b981",
  greenDark: "#059669",
  // BLUE
  blueLight: "#60a5fa",
  bluePrimary: "#3b82f6",
  blueDark: "#2563eb",
  // INDIGO
  indigoLight: "#818cf8",
  indigoPrimary: "#6366f1",
  indigoDark: "#4f46e5",
  // CONTRAST
  white: "#ffffff",
  black: "#000000"
}

const theme = createTheme({
  colors: {
    textBlack: palette.black,
    textGray: palette.grayDark
  },
  spacing: {
    none: 0,
    xs: scale(2),
    s: scale(4),
    m: scale(8),
    l: scale(12)
  },
  breakpoints: {},
  textVariants: {
    tileTitle: {
      fontSize: scale(14),
      fontWeight: "600",
      color: "textBlack"
    },
    tileSubtitle: {
      fontSize: scale(12),
      fontWeight: "400",
      color: "textGray"
    }
  }
})

const themeDark: Theme = {
  ...theme
}

export type Theme = typeof theme
export {theme, themeDark}
