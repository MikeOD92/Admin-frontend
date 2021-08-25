import axios from 'axios';
import React, { Component } from 'react'

export class ImageUpload extends Component <{value: string, imageChanged: any}> {

    image = '';

    upload = async (files: FileList | null) => {
        
        if(files === null) return;

        const data = new FormData();

        data.append('image', files[0]);
        
        const response = await axios.post('upload', data);
        
        this.image = response.data.url;

        this.props.imageChanged(this.image);
    }
    render() {
        return (
            <div className="input-group">
            <input type="text" className="for-control" name="image"
            onChange={e => {
                this.image = e.target.value;
                this.props.imageChanged(this.image);
            }}
            value={this.props.value}/>
            <div className="input-group-append">
                <label className="btn btn-primary">
                    Upload <input type="file" hidden onChange={ e => this.upload(e.target.files)}/>
                </label>
            </div>
        </div>
        )
    }
}

export default ImageUpload
