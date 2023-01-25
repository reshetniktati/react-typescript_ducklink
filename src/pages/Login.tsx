import { useState } from 'react'
import BaseButton from '../common/BaseButton'

export default function Login() {
  const [user, setUser] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    console.log('form', 'user -', user, 'pass -', pass)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'user') {
      setUser(e.target.value)
    } else {
      setPass(e.target.value)
    }
  }

  // if register add second pass field varification
  // use the same for forgot pass?
  // loginForm separate component?

  return (
    <div className='container'>
      <form className='form-login'>
        <label>
          User:
          <input type="text" name="user" placeholder="Enter the name, please" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Password:
          <input type="text" name="pass" placeholder="Enter the password" onChange={(e) => handleChange(e)} />
        </label>
        <BaseButton onClick={(e) => handleSubmit(e)}>Login</BaseButton>
      </form>
    </div>
  )
}
