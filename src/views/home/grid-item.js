import React, { Component } from 'react';
import './grid-item.css'


class GridItem extends Component {

    render() {

        const {images} = this.props ;  
        
        return(
            <div className="grid-wrapper" >
                <div className="b1" > <img alt="img1" src={images[0]} /> </div>
                <div className="b2" > <img alt="img2" src={images[1]} /> </div>
                <div className="b3" > <img alt="img3" src={images[2]} /> </div>
                <div className="b4" > <img alt="img4" src={images[3]} /> </div>
            </div>
        ) ;
    }
}

export default GridItem