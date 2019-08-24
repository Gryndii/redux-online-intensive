// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';

//Instruments
import { book } from './book';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
});

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
            <Switch>
                <Route path = { book.feed } component = { Feed } />
                <Route path = { book.profile } component = { Profile } />
                <Route path = { book.newPassword } component = { NewPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        ) : (
            <Switch>
                <Route path = { book.login } component = { Login } />
                <Route path = { book.signUp } component = { Signup } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
