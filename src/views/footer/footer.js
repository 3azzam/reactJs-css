import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {

    state = {
        showFooter : false 
    }

    render() {
        return (
            <div className={"footer" + (this.state.showFooter ?  " show-footer" : " " ) } >
   
                <div className="footer-popup" onClick={()=> this.setState({showFooter : !this.state.showFooter}) }   ></div>
                <div className="footer-wapper" >
                    <div className="row p-5 mx-auto" >

                        <div className="col-sm-12 col-md-6 right-half " >
                            <h2> Vestibulum hendrerit tortor id gravida </h2>

                            <p> In tempor porttitor nisl non elementum.
                                Nulla ipsum ipsum, feugiat vitae vehicula vitae, imperdiet sed risus. Fusce sed dictum neque, id auctor felis.
                                Praesent luctus sagittis viverra.
                                Nulla erat nibh, fermentum quis enim ac, ultrices euismod augue. Proin ligula nibh, pretium at enim eget, tempor feugiat nulla
                        </p>
                        </div>

                        <div className="col-sm-12 col-md-6 left-half " >
                            <h2> Follow me</h2>

                            <div className="footer-icons" >
                                <i className="fa fa-twitter" > </i>
                                <i className="fa fa-facebook" > </i>
                                <i className="fa fa-instagram" > </i>
                                <i className="fa fa-dribbble" > </i>
                            </div>

                            <div className="btm-brder" ></div>

                            <div>
                                &copy; Untitled. Photos <a href="https://unsplash.co">Unsplash</a>, Video <a href="https://coverr.co">Coverr</a>.
				        </div>
                        </div>



                    </div>

                </div>
            </div>
        );
    }
}

export default Footer; 
