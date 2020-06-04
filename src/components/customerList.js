import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    onDelete = id => {
        this.props.onDelete(id);
        //console.log("customer list", id);
    }

    onEdit = data => {
        this.props.onEdit(data);
        //console.log("customer list", data);
    }
    render() {
        const customers = this.props.customers;
        return (
            <div className="data animated fadeInUp delay-2s">
                <table id="dtBasicExample" className="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th style={{ width: "50px", textAlign: "center" }}>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th style={{ width: "148px" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            customers.map((customer) => {
                                return <Customer customer={customer} key={customer.id}
                                    onDelete={this.onDelete}
                                    onEdit={this.onEdit} />;
                            })
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default CustomerList;