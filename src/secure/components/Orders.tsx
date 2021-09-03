import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { order } from '../../classes/order'
import Wrapper from '../Wrapper'
import Paginator from './Paginator'

export class Orders extends Component {
    state = {
        orders: []
    }
    page = 1;
    last_page = 0;

    componentDidMount = async () => {

        const response = await axios.get(`orders?page=${this.page}`);

        this.setState({
            order: response.data.data
        })

        this.last_page = response.data.meta.last_page;
    }
    handlePageChange = async( page: number) => {
            this.page = page;
            await this.componentDidMount()
    }
    render() {
        return (
            <Wrapper>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Total</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.orders.map((order: order)=>{
                                return(
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.first_name} {order.last_name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.total}</td>
                                            <td>
                                                <div className="btn-group mr-2">
                                                    <Link to={`/orders/${order.id}`} 
                                                    className="btn btn-sm btn-outline-secondary">
                                                    View </Link>
                                                </div>
                                            </td>
                                        </tr>
                                )
                            })}
                            </tbody>
                            </table>
                        </div>
                        <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange}/>
            </Wrapper>
        )
    }
}

export default Orders
