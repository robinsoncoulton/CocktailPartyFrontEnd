import * as React from 'react';
import Delete from './Delete';
import { API_URL } from '../constants/api_url'

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount() {
      const url = `${API_URL}/cocktails`;
      fetch(url, {
        mode: 'cors',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(json => {
          this.setState({
              isLoaded: true,
              data: json
          })
      });
    }

    render() {
      var { isLoaded, data } = this.state;
      if (!isLoaded) {
          return <div>Loading...</div>;
      }
      return (
          <div>
              <form action={`${API_URL}/cocktails`} method='post'>
                  <label>Title: </label>
                  <input name='title' id='title' type='text'/>

                  <label>Created by: </label>
                  <input name='created_by' id='created_by' type='text'/>   

                  <input type='submit'/>
              </form>
              <ul>
                  {data.map(cocktail => (
                      <li key={cocktail.id}>
                          {cocktail.title} | Creator: {cocktail.created_by}
                          {/* <Delete id={cocktail.id} onClick={this.onClick} handleDelete={this.handleDelete}/> */}
                      </li>
                  ))}
              </ul>
          </div>
        );
    }
         
    // handleDelete = (id) => {
    //     debugger;
    //     this.setState({
    //         data: this.state.data.filter(element => {
    //             return element !== id
    //         })
    //     })
    // }
}

export default Page;