import React from 'react';
import './Contact.scss';
import useCustomFormHook from '../CustomHooks';

const Contact: React.FC = () => {
    const submitContact = () => {
        alert("User Created!");
    };
    const { inputs, handleInputChange, handleSubmit } = useCustomFormHook({
        customerName: '',
        emailAddress: '',
        subject: '',
        message: ''
    }, submitContact);

    return (
        <div className="row">
            <form onSubmit={handleSubmit} autoComplete="off">
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
                                <input id="customerName" type="text" name="customerName" className="validate" onChange={handleInputChange} value={inputs.customerName} required />
                                <label htmlFor="customerName">Name</label>
                            </div>
                        </div>
                        <div className="row k-row">
                            <div className="input-field col s12">
                                <input id="emailAddress" type="email" name="emailAddress" className="validate" onChange={handleInputChange} value={inputs.emailAddress} required />
                                <label htmlFor="emailAddress">Email</label>
                            </div>
                        </div>
                        <div className="row k-row">
                            <div className="input-field col s12">
                                <input id="subject" type="text" className="validate" name="subject" onChange={handleInputChange} value={inputs.subject} required />
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>
                        <div className="row k-row">
                            <div className="input-field col s12">
                                <textarea id="message" className="materialize-textarea" name="message" onChange={handleInputChange} value={inputs.message} required />
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
            </form>
        </div>
    );
}

export default Contact;
