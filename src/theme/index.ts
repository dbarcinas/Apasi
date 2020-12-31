import {createTheme} from "@shopify/restyle"

const palette = {}

const theme = createTheme({
  colors: {},
  spacing: {},
  breakpoints: {},
  textVariants: {}
})

const themeDark: Theme = {
  ...theme
}

export type Theme = typeof theme
export {theme, themeDark}
