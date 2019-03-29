import React, { Component } from 'react'

export default class Od extends Component {
    render() {
        const address = {
            street: 'parenggean',
            city: '',
            country: ''
        };

        const { street: st } = address;
        console.log(st)
        return (
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}
