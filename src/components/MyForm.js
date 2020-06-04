import React, { Component } from "react";

class MyForm extends Component {
    state = {
        form: {first_name: '', last_name: '', email: '', isEdit: false },
        btnName: "Save",
        btnClass: "ui primary button submit-button"
    };

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }
    componentDidUpdate(prevProvs){
        if(prevProvs !== this.props && !this.isEmpty(this.props.customer)){
            this.setState({
                form: { ...this.props.customer, isEdit: true},
                btnName: "Update",
                btnClass: "ui orange button submit-button"
            });
            //console.log("actualizar");
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    };

    onFormSubmit = event => {
        //evitar enviar formulario
        event.preventDefault();

        //llamar al formulario de validación
        if(this.formValidation()){
            //enviar datos de formulario a la aplicación
            this.props.onFormSubmit(this.state.form);
        }

        //cambiar al boton de guardar
        this.setState({
            btnName: "Save",
            btnClass: "ui primary button submit-button"
        });

        //limpia campos
        this.clearFormFields();
    };

    formValidation = () => {
        //primer nombre
        if(document.getElementsByName("first_name")[0].value === ""){
            alert('Ingrese Primer Nombre');
            return false;
        }

        //apellido
        if(document.getElementsByName("last_name")[0].value === ""){
            alert('Ingrese apellidos');
            return false;
        }

        //email
        if(document.getElementsByName("email")[0].value === ""){
            alert('Ingrese su correo electrónico');
            return false;
        }

        return true;
    }

    clearFormFields = () => {
        //cambia formulario state
        this.setState({
            form: {first_name: '', last_name: '', email: '', isEdit: false }
        });

        //limpia campos del formulario
        document.querySelector(".form").reset();
    };

    render() {
        return(
            <form className="ui form animated fadeInUp delay-1s">
                <div className="fields">
                    <div className="four wide field">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            placeholder="First Name" 
                            onChange={this.handleChange}
                            value={this.state.form.first_name} 
                        />
                    </div>

                    <div className="four wide field">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            placeholder="Last Name"
                            onChange={this.handleChange} 
                            value={this.state.form.last_name}
                        />
                    </div>

                    <div className="four wide field">
                        <label>E-mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="@gmail.com"
                            onChange={this.handleChange} 
                            value={this.state.form.email}
                        />
                    </div>

                    <div className="four wide field">
                        <button className={this.state.btnClass} onClick={this.onFormSubmit} >{this.state.btnName}</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default MyForm;