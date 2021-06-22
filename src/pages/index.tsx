import Link from 'next/link'
import { useContext } from "react"
import { DataContext } from "../Contexts"

const Home: React.FC = () => {
  // const { data } = useContext(DataContext)

  // if(!data) {
  //   return <Link href="/login">Login</Link>
  // }

  // const { user } = data

  // if(!user) {
  //   return <Link href="/login">Login</Link>
  // }
  
  return (
    <div>
    Welcome <Link href="/logout">Logout</Link>
    </div>
  )
}
    

export default Home