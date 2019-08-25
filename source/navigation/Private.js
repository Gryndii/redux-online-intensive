// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Feed, Profile, NewPassword } from '../pages';

//Instruments
import { book } from './book';

export default class Private extends Component {
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
