import { KioscoProvider } from '@/context/KioscoProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
      <KioscoProvider>
        <Component {...pageProps} />
      </KioscoProvider>
    ) 
}
