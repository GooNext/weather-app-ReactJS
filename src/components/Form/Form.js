import React from 'react'
import classes from './Form.scss'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Form = props => {
    return (
        <form onSubmit = {props.getRequest} className = {classes.Form}>
            <FormControl>
                <InputLabel htmlFor="my-input">Введите город</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" name = 'city' className = {classes.Input} type = 'primary'/>
                <Button variant="contained" color="secondary">
                    Узнать погоду
                </Button>
            </FormControl>
        </form>
    )
}

export default Form