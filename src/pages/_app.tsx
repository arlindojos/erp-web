import Link from 'next/link'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import '../styles/globals.css'

Amplify.configure({...config, ssr: true})

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="py-4 px-12 flex border-b border-gray-300">
        <Link href="/">
          <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
            <p>Home</p>
          </a>
        </Link>
        <Link href="/auth">
          <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 ml-10">
            <p>Log In</p>
          </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
