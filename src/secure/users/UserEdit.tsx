import axios from 'axios';
import React, { Component, PropsWithRef } from 'react'
import { Role } from '../../classes/role';
import { User } from '../../classes/user';
import Wrapper from '../Wrapper'


export class UserEdit extends Component<{ match: PropsWithRef<any> }> {

    state = {      
        first_name: "",
        redirect: false,
        user: {},
        last_name: "",
        email: "",
        role_id: 0,
        roles: []
    }

    id = 0;
    first_name = "";
    last_name = "";
    email = "";
    role_id = 0;

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        const roleCall = await axios.get('roles');

        const userCall = await axios.get(`users/${this.id}`)

        const user: User = userCall.data.data

        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role_id: user.role.id,
            roles: roleCall.data.data
        })
    }

    submit = async () => {

    }

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="first_name"
                            onChange={e => this.first_name = e.target.value} defaultValue={this.state.first_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                            onChange={e => this.last_name = e.target.value} defaultValue={this.state.last_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                            onChange={e => this.email = e.target.value} defaultValue={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <select name="role_id" className="form-control"
                                onChange={e => {
                                    this.role_id = parseInt(e.target.value);
                                    this.setState({
                                        role_id: this.role_id
                                    })
                                }}
                                value={this.state.role_id}>
                            <option>Select Role</option>
                            {this.state.roles.map(
                                (role: Role) => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )
                                }
                            )}
                        </select>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        )
    }
}


