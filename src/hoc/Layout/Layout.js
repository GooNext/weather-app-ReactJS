import React, {useState} from 'react'
import classes from './Layout.module.scss'
import Title from '../../components/Title/Title'
import Form from '../../components/Form/Form'
import axios from 'axios'
import Info from '../../components/Info/Info'
import Background from '../../components/Background/Background'


const API_KEY = '24d03eca04b97ba9509389b6bb23da77'

const Layout = props => {
    let[name, setName] = useState('')
    let[country, setCountry] = useState('')
    let[temp, setTemp] = useState('')
    let[wind, setWind] = useState('')
    
    const getRequest = e => {
        const city = e.target.elements.city.value
        e.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => {
            console.log(res.data)
            setName(name = res.data.name)
            setCountry(country = res.data.sys.country)
            setTemp(name = res.data.main.temp)
            setWind(wind = res.data.wind.speed)
        })
    }

    return(
        <div className = {classes.Layout}>
            <Title/>
            <Info
                name = {name}
                country = {country}
                temp = {temp}
                wind = {wind}
            />
            <hr/>
            <Form
                getRequest = {getRequest}
            />
            <Background/>
        </div>
    )
    }

export default Layout