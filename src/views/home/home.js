import React, { Component } from 'react';
import './home.css';

import GridItem from './grid-item' ;
import Footer from '../footer/footer' ;

import img1 from '../../assets/images/pic01.jpg' ;
import img2 from '../../assets/images/pic02.jpg' ;
import img3 from '../../assets/images/pic03.jpg' ;
import img4 from '../../assets/images/pic04.jpg' ;
import img5 from '../../assets/images/pic05.jpg' ;
import img6 from '../../assets/images/pic06.jpg' ;
import img7 from '../../assets/images/pic07.jpg' ;
import img8 from '../../assets/images/pic08.jpg' ;
import img9 from '../../assets/images/pic09.jpg' ;
import img10 from '../../assets/images/pic10.jpg' ;
import img11 from '../../assets/images/pic11.jpg' ;
import img12 from '../../assets/images/pic12.jpg' ;
import img13 from '../../assets/images/pic13.jpg' ;
import img14 from '../../assets/images/pic14.jpg' ;
import img15 from '../../assets/images/pic15.jpg' ;
import img16 from '../../assets/images/pic16.jpg' ;


class Home extends Component {

    state = {
        clicked: false
    }

    switch = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div className="home-wrapper" >
            
                    <header className={"header" + (this.state.clicked ? " small-header" : " ")}  >
                        <div className={"t-div " + (this.state.clicked ? " small-div" : " ")}  >
                            <div className="content" >
                                <h1 className={this.state.clicked ? 'd-none' : ''} > Radius </h1>
                                <p className={this.state.clicked ? 'd-none' : ''}> a fully responsive mansory-style portfolio template </p>
                                <button className={"button btn " + (this.state.clicked ? 'd-none' : '') } onClick={() => this.setState({ clicked: !this.state.clicked })} > let's go  </button>
                                <i className={"fa fa-home mb-3 " + (this.state.clicked ? '' : 'd-none') } onClick={() => this.setState({ clicked: !this.state.clicked })}  ></i>
                            </div>
                        </div>
                    </header>

                    <div className="row p-2 mx-auto "  >
                        <div className="col-sm-12 col-lg-6 md-med-m" >
                                <GridItem images={[img1 ,img2 , img3 , img4]} />
                        </div>
                        <div className="col-sm-12 col-lg-6 md-med-m" >
                                <GridItem images={[img5 ,img6 , img7 , img8]} />
                        </div>
                    </div>

                    <div className="row  mx-auto "  >
                        <div className="col-sm-12 col-lg-6 md-med-m" >
                                <GridItem images={[img9 ,img10 , img11 , img12]} />
                        </div>
                        <div className="col-sm-12 col-lg-6 md-med-m" >
                                <GridItem images={[img14 ,img13 , img15 , img16]} />
                        </div>
                    </div>

                    <Footer />
            </div>
        );
    }
}
export default Home 