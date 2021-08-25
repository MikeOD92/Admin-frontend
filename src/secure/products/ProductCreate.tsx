import React, { Component, SyntheticEvent } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Wrapper from '../Wrapper';

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
    upload = async (files: FileList | null) => {
        if(files === null) return;
        const data = new FormData();
        data.append('image', files[0]);
        const response = await axios.post('upload', data);
        
        this.image = response.data.url;

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
                        <label>Image</label>
                        <div className="input-group">
                            <input type="text" className="for-control" name="image"
                            onChange={e => this.image = e.target.value}
                            value={this.image = this.state.image}/>
                            <div className="input-group-append">
                                <label className="btn btn-primary">
                                    Upload <input type="file" hidden onChange={ e => this.upload(e.target.files)}/>
                                </label>
                            </div>
                        </div>
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