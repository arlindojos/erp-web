import Input from './Input'

function SignUp({
  setUiState, signUp, onChange
}) {
  return (
    <>
      <p className="text-3xl font-black">Sign up for an account</p>
      <div className="mt-10">
        <Input onChange={onChange} type="text" name="name" placeholder="Your name" />
      </div>
      <div className="mt-7">
        <Input onChange={onChange} type="email" name="email" placeholder="Your email" />
      </div>
      <div className="mt-7">
        <Input name="password" onChange={onChange} type="password" placeholder="Your password" />
      </div>
      <button
        onClick={signUp}  
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded">
        Continue
      </button>

      <a>
        <span
          onClick={() => setUiState('forgotPassword')}
          className="ml-8 mt-6 sm:ml-38 text-pink-500"
        >
          Forgot your password?
        </span>
      </a>

      <p className="mt-12 text-sm font-light">
      Already have an account?
        <span
          className="cursor-pointer text-pink-600"
          onClick={() => setUiState('signIn')}
        > Sign In.</span>
    </p>
    </> 
  )
}

export default SignUp