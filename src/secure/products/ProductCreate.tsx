import React, { Component, SyntheticEvent } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Wrapper from '../Wrapper';
import ImageUpload from '../components/ImageUpload';

export default class ProductCreate extends Component {
    state = {
        redirect: false,
        image: ''
    }
    title = '';
    description = '';
    image= '';
    price = 0;

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('products', {
            description: this.description,
            image: this.image,
            price: this.price,
            title: this.title
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
                        onChange={e => this.title = e.target.value}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" name="description" 
                    onChange={e => this.description = e.target.value}></textarea>
                    
                </div>
                <div className="form-group">
                        <ImageUpload value={this.image = this.state.image} imageChanged={this.imageChanged}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="float" className="form-control" name="email" 
                        onChange={e => this.price = parseFloat(e.target.value)}/>
                    </div>
                    <button className="btn btn-outline-secondary">Save</button>
                </form>
                </Wrapper>
        )
    }
}