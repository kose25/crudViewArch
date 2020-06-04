import React, { Component } from "react";

class Carousel extends Component {

    render() {
        return (
            
            <div id="carousel-example-1z" className="carousel slide carousel-fade animated fadeInUp" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-1z" data-slide-to="1"></li>

                </ol>
                
                <div className="carousel-inner" role="listbox" style={{height: 300 + 'px'}}>
                    
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="First slide"/>
                    </div>
                       
                    <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Second slide"/>
                    </div>
                            

                </div>
                        
                
                <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                       
            </div>
                    

        );

    }
}

export default Carousel;