import React from 'react';
import './Contact.scss';

class Contact extends React.Component<ContactProps, ContactState> {
    constructor(ContactProps: Readonly<ContactProps>) {
        super(ContactProps);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="row card-panel">
                <div className="col s6">
                    <div className="row email">
                        <img src="/images/email.png" alt="email"></img>
                    </div>
                </div>
                <div className="col s6">
                    <div className="row center">
                        <h4> Get in touch </h4>
                    </div>
                    <div className="row k-row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" value={this.props.Name} required />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row k-row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" value={this.props.Email} required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row k-row">
                        <div className="input-field col s12">
                            <input id="subject" type="text" className="validate" value={this.props.Subject} required />
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="row k-row">
                        <div className="input-field col s12">
                            <textarea id="message" className="materialize-textarea" value={this.props.Message} required onChange={this.handleChange}></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="row k-row">
                        <div className="input-field col s12 center">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface ContactProps {
    Name: string;
    Email: string;
    Subject: string;
    Message: string;
}

interface ContactState {

}

export default Contact;