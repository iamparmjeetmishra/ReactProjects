import './App.css'
import {ZodType, z} from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

function App() {

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    age: z.number().min(18).max(70),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
  }).refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ["confirmPassword"],
    }
  )

  const { register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)})
  
  const submitData = (data: FormData) => {
    console.log('Done', data)
  }

  return (
    <>
      <div className='app'>
        <form onSubmit={handleSubmit(submitData)}>
          <label> First Name:</label><br />
          <input type="text" {...register('firstName')} /> <br />
          {errors.firstName && <div>{ errors.firstName.message}</div>}
          <br/>
          <label> Last Name:</label> <br />
          <input type="text" {...register('lastName')} /> <br />
          {errors.lastName && <span>{ errors.lastName.message}</span>}
          <br/>
          <label> Email:</label><br />
          <input type="email" {...register('email')} /><br />
          {errors.email && <span>{ errors.email.message}</span>}
          <br/>
          <label> Age:</label><br />
          <input type="number" {...register('age', { valueAsNumber: true })} />
          {errors.age && <span>{ errors.age.message}</span> }
          <br/>
          <label> Password:</label> <br />
          <input type="password" {...register('password')} />
          {errors.password && <span>{ errors.password.message}</span>}
          <br/>
          <label>Confirm Password:</label> <br />
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && <span>{ errors.confirmPassword.message}</span>}
          <br/>
          <input type='submit'  />
        </form>
      </div>
    </>
  )
}

export default App
