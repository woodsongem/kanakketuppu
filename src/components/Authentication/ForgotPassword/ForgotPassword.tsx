import React from 'react';

class ForgotPassword extends React.Component<ForgotPasswordProps, ForgotPasswordState> {
    constructor(ForgotPasswordProps: Readonly<ForgotPasswordProps>) {
        super(ForgotPasswordProps);
    }

    render() {
        return (
            <div>
                ForgotPassword
            </div>
        );
    }
}

interface ForgotPasswordProps {

}

interface ForgotPasswordState {

}

export default ForgotPassword;