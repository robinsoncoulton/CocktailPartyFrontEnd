import React from 'react';
import { API_URL } from '../constants/api_url';

class Delete extends React.Component {
    render() {
        return (
            <button onClick={this.handleClick}>
                <i className='far fa-trash-alt'></i>
            </button>
        )
    }

    handleClick = () => {
        fetch(`${API_URL}/cocktails/${this.props.id}`, {
            mode: 'cors',
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(this.props.handleDelete(this.props.id));
    }
}

export default Delete;
