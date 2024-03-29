// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { book } from '../../navigation/book';

//Actions
import { authActions } from '../../bus/auth/actions';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
    profile:         state.profile,
    isOnline:        state.ui.get('isOnline'),
});

const mapDispatchToProps = {
    logoutAsync: authActions.logoutAsync,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Nav extends Component {
    _getNav = () => {
        const { isAuthenticated, profile } = this.props;

        return isAuthenticated ?
            <>
                <div>
                    <NavLink activeClassName = { Styles.active } to = { book.profile }>
                        <img src = { profile.get('avatar') } />
                        {profile.get('firstName')}
                    </NavLink>
                    <NavLink activeClassName = { Styles.active } to = { book.feed }>
                        Стена
                    </NavLink>
                </div>
                <button onClick = { this._logout }>Выйти</button>
            </>
            :
            <>
                <div>
                    <NavLink activeClassName = { Styles.active } to = { book.login }>
                        Войти
                    </NavLink>
                    <NavLink activeClassName = { Styles.active } to = { book.signUp }>
                        Создать аккаунт
                    </NavLink>
                </div>
                <button className = { Styles.hidden }>Выйти</button>
            </>
        ;
    };

    _logout = () => {
        this.props.logoutAsync();
    };

    render () {
        const { isOnline } = this.props;

        const navigation = this._getNav();
        const statusStyle = cx(Styles.status, {
            [Styles.online]:  isOnline,
            [Styles.offline]: !isOnline,
        });

        return (
            <section className = { Styles.navigation }>
                <div className = { statusStyle }>
                    <div>{isOnline ? 'Онлайн' : 'Офлайн'}</div>
                    <span />
                </div>
                {navigation}
            </section>
        );
    }
}
