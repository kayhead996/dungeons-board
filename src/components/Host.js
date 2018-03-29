import React from 'react';

const Host = () => (
    <div>
        <h1>Host a Server</h1>
        <HostForm />
    </div>
);

class HostForm extends React.Component {
    constructor() {
        super();
        this.state = {
            serverName: '',
            username: ''
        };

    }

    onChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    onSubmit(event) {
        event.preventDefault();
        const { serverName, username } = this.state;
        fetch('/host', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "serverName": serverName,
                "username": username
            })
        }).then(res => res.json())
            .then(vals => console.log(vals));
    }     

    render() {
        const { serverName, username } = this.state;

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="serverName">Server Name:</label>
                    <input type="text" name="serverName" value={serverName} onChange={this.onChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={username} onChange={this.onChange.bind(this)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Host;
