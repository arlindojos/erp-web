import { AppProps } from 'next/app'
import DataProvider from '../Contexts'
import Amplify from 'aws-amplify'
import config from '../aws-exports'

Amplify.configure(config)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  )
}

export default MyApp
