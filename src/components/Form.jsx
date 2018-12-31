import * as React from 'react';
import { API_URL } from '../constants/api_url'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const data = {
            [event.target[0].name]: event.target[0].defaultValue,
            [event.target[1].name]: event.target[1].defaultValue,
            password_confirmation: event.target[1].defaultValue,
            confirm_success_url: 'www.wikipedia.org'
        }
        event.preventDefault();
        fetch(
            `${API_URL}/auth/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        ).then(function(response) {
            return response.json();
          }).then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
      }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input name='email' type='text' value={this.state.email} onChange={this.handleChange} />

                <label htmlFor='password'>Password:</label>
                <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/>

                <input id='login' name='signin' type='submit' value='Sign Up / Login'/>
            </form>
        );
    }
}

export default Form;