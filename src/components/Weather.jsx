import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

import humiditpng from '../images/humid.png'
import wind from '../images/wind.png'
import axios, * as others from 'axios';
import clouds from "../images/cloudy.png"
import clear from "../images/clear.png"
import rain from '../images/rainy.jpg'
import drizzle from '../images/drizzle.jpg'
import mist from '../images/mist2.png'
import "./weather.css"
import globe from '../images/globe.webp'

const weather = () => {
    const [isClicked, setisClicked] = useState(true);

    const [cityName, setcityName] = useState('');
    const [data, setdata] = useState({
        celcius: '',
        city: "",
        humidity: '',
        speed: '',
        image: clouds
    });


    const handleChange = (e) => {
        setcityName(e.target.value)
    }
    const submit = () => {
        if (cityName !== '') {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=498ae492a2fe27252178b12f8a0f12d3&units=metric`
            axios.get(apiUrl)
                .then(res => {
                    console.log(res.data)

                    if (res.data.weather[0].main === "Clouds") {
                        setdata({
                            celcius: res.data.main.temp,
                            city: res.data.name,
                            humidity: res.data.main.humidity,
                            speed: res.data.wind.speed,
                            image: clouds
                        })
                    }
                    else if (res.data.weather[0].main === "Clear") {
                        setdata({
                            celcius: res.data.main.temp,
                            city: res.data.name,
                            humidity: res.data.main.humidity,
                            speed: res.data.wind.speed,
                            image: clear
                        })
                    }
                    else if (res.data.weather[0].main === "Rain") {
                        setdata({
                            celcius: res.data.main.temp,
                            city: res.data.name,
                            humidity: res.data.main.humidity,
                            speed: res.data.wind.speed,
                            image: rain
                        })
                    }
                    else if (res.data.weather[0].main === "Drizzle") {
                        setdata({
                            celcius: res.data.main.temp,
                            city: res.data.name,
                            humidity: res.data.main.humidity,
                            speed: res.data.wind.speed,
                            image: drizzle
                        })
                    }
                    else if (res.data.weather[0].main === "Mist") {
                        setdata({
                            celcius: res.data.main.temp,
                            city: res.data.name,
                            humidity: res.data.main.humidity,
                            speed: res.data.wind.speed,
                            image: mist
                        })
                    }
                    else {
                        setdata({
                            celcius: res.data.main.temp,
                            city: res.data.name,
                            humidity: res.data.main.humidity,
                            speed: res.data.wind.speed,
                            image: clouds
                        })
                    }



                }

                )
            setisClicked(false)
                .catch(err => console.log(err))
        }
    }
    // document.addEventListener('keypress', (e) => {

    //         console.log('user pressed', e.key)
    //         if (e.key === 'Enter') {
    //             submit()
    //         }


    //     })
    const handleKeypres = (e = React.KeyboardEvent) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            submit()
        }
    }



    return (

        <div className='main rounded min-h-[50rem]  mx-auto my-30 min-w-[40%] bg-transparent  p-6 '>
            <div className="search flex justify-between items-center p-12 mt-8">
                <input onChange={handleChange} onKeyDown={handleKeypres} value={cityName} className='w-[80%] rounded-md outline-0 px-8 py-8 text-black border-none ' type="text" placeholder='Enter City Name' />
                <button onClick={submit} className='cursor-pointer px-8 py-8 text-center rounded-full '><FaSearch className='text-xl' /></button>
            </div>
            {isClicked ? <div className="container h-2/3 w-2/3 mx-auto my-10">
                <h2 className='text-4xl'>Fetching data.. </h2>
                <h2 className='text-4xl'>Enter city name to get response </h2>
                <img className='w-full' src={globe} alt="" />
            </div> : <>

                <div className="winfo text-slate-50 flex flex-col items-center">
                    <img src={data.image} alt="weather" className='h-[16em]' />
                    <h1 className='text-[70px]'>{Math.round(data.celcius)}°C</h1>
                    <h2 className='text-[40px] text-500'>{data.city}</h2>
                    <div className="details gap-10 my-10 w-full flex items-center justify-between  py-[20px] px-6">
                        <div className="col gap-5">
                            <img src={humiditpng} alt="humidity" />
                            <div >
                                <h2 className='text-[40px] text-center'>Humidity</h2>
                                <p className='text-[40px] text-center'>{Math.round(data.humidity)}%</p>
                            </div>
                        </div>
                        <div className="col gap-5">
                            <img src={wind} alt="humidity" />
                            <div className='text-[40px]'>
                                <h2 className='text-[40px] text-center'>Wind</h2>
                                <p className='text-[40px] text-center'>{Math.round(data.speed)} km/h</p>
                            </div>
                        </div>
                    </div>
                </div></>
            }

        </div>
    )
}

export default weather

