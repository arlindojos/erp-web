import { Auth } from 'aws-amplify'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from "../Contexts"

interface FormState {
  email: string
  password: string
  authCode: string
}

const Profile: React.FC = () => {
  const [ formState, setFormState ] = useState()
  const { data, setData } = useContext(DataContext)

  const formSubmit = (form: FormState) => {
    
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
          authCode: '' 
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