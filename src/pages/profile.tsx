import { Auth } from 'aws-amplify'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useEffect } from 'react'

interface formData {
  family_name: string
  given_name: string
  email: string
  phone_number: string
  password: string
}


const Profile: React.FC = () => {
  useEffect(() => {
    checkUser()

    async function checkUser() {
      const user = Auth.currentAuthenticatedUser()

      console.log(user)
      
    } 
  })

  const formSubmit = (form: formData) => {
    
  }

  return(
    <div>
      <div>
        <button onClick={() => Auth.federatedSignIn({ provider: "Google" as any })}>
          Login com google
        </button>
        <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" as any })}>
          Login com facebook
        </button>
      </div>
      <Formik
        initialValues={{
          email: '', 
          password: '',
          family_name: '',
          given_name: '',
          phone_number: ''
        }}
        onSubmit={(values) => {
          formSubmit(values)
        }}
      >
        <Form className="form">
          <label htmlFor="name">Email or telefone</label>
          <Field name="email" type="email" />
          <ErrorMessage component="div" name="email" />

          <label htmlFor="password">Senha</label>
          <Field name="password" type="password" />
          <ErrorMessage component="div" name="password" />

          <button type="submit">
            Submeter
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Profile;