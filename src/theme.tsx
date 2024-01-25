import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#3D8356",
    secondary: "#F68815",
    primary2: "#000E11",
    subText: "#333333",
    grey: "#6B7280",
    darkGrey: "#222222",
    red2: "#F87171",
    dark: "#303030",
    lightGrey: "#7E7E7E",
    orange: "#F68815",
    darkRed: "#7D0003",
  },
  fonts: {
    heading: `'Helvetica Neue', sans-serif`,
    body: `'Helvetica Neue', sans-serif`,
  },
});

export default theme;
