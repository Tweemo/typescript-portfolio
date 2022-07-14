import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    scheme: {
      bg: "#ced7e0",
      title: "#7599b1",
      text: "#3b4c58",
    },
  },
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp