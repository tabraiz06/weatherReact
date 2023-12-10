import React, { useState } from 'react'

const Login = () => {
    const [user, setuser] = useState({
       
        username:"",
       
        password:""
    });
    const onchange=(e)=>{
        console.log(e.target.name)
        let name= e.target.name;
        let value=e.target.value
        setuser({
            ...user,
            [name]:value
        })
    }
    const submit=(e)=>{
        e.preventDefault()
        setuser({
            username:"",
       
            password:"" 
        })
    }
    
    
    return (
        <div className='container mt-3 flex text-center justify-center max-w-7xl'>
            <div className='w-1/2 '>
                <img src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif" alt="register here" className='h-full w-auto'/>
            </div>
            <div className='w-1/2 from flex justify-center flex-col  '>
                <h1 className='text-6xl p-5 font-bold text-center'>Login Now</h1>
                <form action="#"  className='flex flex-col gap-4 items-center' onSubmit={submit}>
                    <label className="text-center" htmlFor="username">User Name</label>
                    <input className='py-4 px-4 rounded w-full' onChange={onchange} type="text" placeholder='username' id='usename' name='username' value={user.username} required autoComplete='off' />
                    <label htmlFor="password">Password</label>
                    <input className='py-4 px-4 rounded w-full' onChange={onchange} type="text" placeholder='password' id='password' value={user. password} name='password' required autoComplete='off' />
                    <button className="btn btn-primary bg-lime-600 p-5 rounded-xl">Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Login
