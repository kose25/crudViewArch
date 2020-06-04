import React, { Component } from "react";

class Loader extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center my-4">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Loader;