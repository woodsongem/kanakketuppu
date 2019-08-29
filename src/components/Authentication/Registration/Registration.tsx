import React from 'react';

class Registration extends React.Component<RegistrationProps, RegistrationState> {
    constructor(RegistrationProps: Readonly<RegistrationProps>) {
        super(RegistrationProps);
    }
    render() {
        return (
            <div>
                Registration
            </div>
        );
    }
}

interface RegistrationProps {

}

interface RegistrationState {

}
export default Registration;