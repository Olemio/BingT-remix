import { Layout } from "~/components/layout";
import { FormField } from '~/components/form-field';
import { useState } from 'react';

function Login() {
  const [action, setAction] = useState('login')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData( form => ({
      ...form,
      [field]: event.target.value
    }))
  }

  return  <Layout>


    <button
      onClick={() => setAction(action == 'login' ? 'register' : 'login')}
    >{action === 'login' ? 'Sign Up' : 'Sign In'}</button>

    <div>Velkommen til BingT</div>

    {
      JSON.stringify(formData)
    }

    <p>{
      action === 'login' ? 'Log In To Start Timing!' : 'Sign Up To Get Started!'
    }</p>

    <form action="">

      <FormField
        htmlFor="email"
        label="Email"
        value={formData.email}
        onChange={e => handleInputChange(e, 'email')}
      />

      <FormField
        htmlFor="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={e => handleInputChange(e, 'password')}
      />

      {
        action !== 'login' ? <>
          <FormField
            htmlFor="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={e => handleInputChange(e, 'firstName')}
          />
    
          <FormField
            htmlFor="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={e => handleInputChange(e, 'lastName')}
          />
        </> : null
      }

      <div>
        <button type="submit" name="_action" value={action}>
          {
            action === 'login' ? 'Sign In' : 'Sign Up'
          }
        </button>
      </div>
    </form>
  </Layout> 
}

export default Login