// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Feed, Profile, NewPassword } from '../pages';

//Instruments
import { book } from './book';

//WebSocket
import { socket } from '../init/socket';

export default class Private extends Component {
    componentDidMount () {
        const { listenPosts } = this.props;

        listenPosts();
    }

    componentWillUnmount () {
        socket.removeListener('create');
        socket.removeListener('like');
    }

    render () {
        return (
            <Switch>
                <Route path = { book.feed } component = { Feed } />
                <Route path = { book.profile } component = { Profile } />
                <Route path = { book.newPassword } component = { NewPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
