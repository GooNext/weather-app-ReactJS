import React from 'react'
import classes from './Info.module.scss'

const Info = props => {
    return (
        <div className = {classes.Info}>
            {props.name 
            ? 
            <div>           
                <h1>{props.temp}°</h1>
                <ul className = {classes.infonotmain}>
                    <li>Город: <br/>{props.name}</li>
                    <li>Страна: <br/>{props.country}</li>
                    <li>Ветер: <br/>{props.wind} м/c</li>
                </ul>
            </div>  
            : null    
        }
        </div>
    )
}

export default Info