import { Component, SyntheticEvent } from 'react';
import './Public.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';
    state = {
        redirect: false
    }
    
    submit = async (e: SyntheticEvent) => { // dont include async for commented out method
        e.preventDefault();

        const response = await axios.post('http://localhost:8000/api/register',{
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        });
        console.log(response)

        this.setState({
            redirect: true
        })
        // axios.post('http://localhost:8000/api/register',{
        //     first_name: this.first_name,
        //     last_name: this.last_name,
        //     email: this.email,
        //     password: this.password,
        //     password_confirm: this.password_confirm,
        // }).then(
        //     res => {
        //         console.log(res)
        //     }
        //)
        // console.log({
        //     first_name: this.first_name,
        //     last_name: this.last_name,
        //     email: this.email,
        //     password: this.password,
        //     password_confirm: this.password_confirm,
        // })
    }
    render() {
        if(this.state.redirect){
            return (<Redirect to={'/login'}/>)
        }
        
        return (
            <form className="form-signin" onSubmit={this.submit}>

                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                <label htmlFor="fistName" className="sr-only">First Name</label>
                <input type="text" id="fistName" className="form-control" placeholder="First Name" required
                    onChange={e => this.first_name = e.target.value} />
                
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input type="text" id="LastName" className="form-control" placeholder="Last Name" required 
                    onChange={e => this.last_name = e.target.value} />

                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required 
                    onChange={e => this.email = e.target.value} />

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required 
                    onChange={e => this.password = e.target.value} />

                <label htmlFor="inputPasswordConfirm" className="sr-only">Password Confirm</label>
                <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Password Confirm" required 
                    onChange={e => this.password_confirm = e.target.value} />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        )
    }
}
