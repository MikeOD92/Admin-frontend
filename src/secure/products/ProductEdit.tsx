import React, { Component, SyntheticEvent } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Wrapper from '../Wrapper';
import ImageUpload from '../components/ImageUpload';
import { Product } from '../../classes/product';

export default class ProductEdit extends Component <{match: any}> {
    state = {

        title: '',
        description: '',
        image: '',
        price: 0,
        redirect: false
    }
    id= 0;
    title = '';
    description = '';
    image= '';
    price = 0;

    componentDidMount = async() => {
        this.id = this.props.match.params.id;

        const response = await axios.get(`products/${this.id}`)

        const product: Product = response.data.data;

        this.setState({
            title: product.title,
            description: product.description,
            image: product.image,
            price: product.price
        })
    }
    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.put(`products/${this.id}`, {
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
            title: this.state.title
        })
        this.setState({
            redirect: true
        })

    }
    imageChanged = (image: string) => {
        this.image = image
        this.setState({
            image: this.image
        })

    }

    render() {
        if(this.state.redirect){
            return (<Redirect to={'/products'}/>);
        }
        return (
            <Wrapper>
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"
                        defaultValue = {this.title = this.state.title}
                        onChange={e => this.setState({ title: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" name="description" 
                    defaultValue = {this.description = this.state.description}
                    onChange={e => this.setState({ description: e.target.value})}></textarea>
                    
                </div>
                <div className="form-group">
                        <ImageUpload value={this.image = this.state.image} imageChanged={this.imageChanged}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="float" className="form-control" name="email" 
                        value = {this.price = this.state.price}
                        onChange={e => this.setState({price: e.target.value})}
                        />
                    </div>
                    <button className="btn btn-outline-secondary">Save</button>
                </form>
                </Wrapper>
        )
    }
}