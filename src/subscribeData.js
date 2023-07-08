import React from 'react';

// if you have some component which need to subscribe a data then use the data to render list.
// you can use this Component to do this.
// What you need to do is write your own business logic on how to render ui using this data
export function WithSubscription(WrappedComponent, method) {
    // this is a container component
    return class extends React.Component {
        state = {
            data: []
        };

        componentDidMount() {
            method().then(data => {
                this.setState({data: data});
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}