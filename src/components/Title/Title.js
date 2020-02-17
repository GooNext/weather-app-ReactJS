import React from 'react'
import classes from './Title.module.scss'

const Title = props => {
    return (
        <div className = {classes.Title}>
            <h3>Узнайте погоду в вашем городе</h3>
            <p>Впишите город в поле ниже</p>
        </div>
    )
}

export default Title