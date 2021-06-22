import { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import awsmobile from '../aws-exports'

Amplify.configure({...awsmobile, ssr: true})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AmplifyAuthenticator>
        <Component {...pageProps} />
      </AmplifyAuthenticator>
    </>
  )
}

export default MyApp
