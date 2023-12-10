import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate= useNavigate()
    const [user, setuser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
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

    const submit= async (e)=>{
        e.preventDefault()
        console.log(user)
        try {
            
       
        const response=await fetch('http://localhost:5000/api/auth/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        if(response.ok){
            setuser({
                name:"",
                username:"",
                email:"",
                phone:"",
                password:"" 
            })
        }
        navigate('/login')
        console.log(response)
    } catch (error) {
           console.log(error ,'error from register page') 
    }
    }
    
    return (
        <div className='container mt-3 flex items-center justify-between max-w-7xl gap-8 '>
            <div className='w-1/2 '>
                <img src="https://adccacademy.com/assets/images/services/software-development.gif" alt="register here" className='h-full w-auto'/>
            </div>
            <div className=' from flex  justify-between flex-col w-1/2 '>
                <h1 className='text-4xl text-center p-5 font-bold'>Register here</h1>
                <form action="#"  className='flex flex-col gap-4' onSubmit={submit}>
                    <label className='text-center'  htmlFor="username">User Name</label >
                    <input className='py-4 px-4 rounded' onChange={onchange} type="text" placeholder='username' id='usename' name='username' value={user.username} required autoComplete='off' />
                    <label className='text-center' htmlFor="fullname">Full name</label >
                    <input className='py-4 px-4 rounded' onChange={onchange} type="text" placeholder='fullname' value={user.name} id='name' name='name' required autoComplete='off' />
                    <label className='text-center' htmlFor="email">Email id</label >
                    <input className='py-4 px-4 rounded' onChange={onchange} type="email" placeholder='email' id='email' value={user.email} name='email' required autoComplete='off' />
                    <label className='text-center' htmlFor="phone">Mobile Number</label >
                    <input className='py-4 px-4 rounded' onChange={onchange} type="tel" placeholder='phone' id='phone' value={user.phone} name="phone" required autoComplete='off' />
                    <label className='text-center' htmlFor="password">Password</label >
                    <input className='py-4 px-4 rounded' onChange={onchange} type="text" placeholder='password' id='password' value={user. password} name='password' required autoComplete='off' />
                    <button className="btn btn-primary bg-lime-600 p-5 rounded-xl">Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Register
