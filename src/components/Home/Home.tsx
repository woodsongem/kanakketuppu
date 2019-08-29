import React from 'react';

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: Readonly<HomeProps>) {
        super(props);
    }
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

interface HomeProps {

}

interface HomeState {

}

export default Home;