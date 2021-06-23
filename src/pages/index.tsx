import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useEffect } from "react"
import { useState } from 'react'

const Home: React.FC = () => {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(usr => {
      console.log(usr.attributes);
      
      setUser(usr.attributes) 
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  
  if(!user) {
    return <Link href="/profile">Login</Link>
  }
  
  return (
    <div>
        <a onClick={() => Auth.signOut()}>Logout</a>
        <br /><br />
        <span>
          Welcome 
          {user.attributes.name}
        </span>
    </div>
  )
}
    

export default Home