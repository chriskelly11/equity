import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as routes from '../../constants/routes';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { auth } from '../../firebase';


const Navigation = ({ sessionStore }) =>
  <div>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () => (
  <div>
    <Menu pointing>
      <Menu.Item name='Landing' as={Link} to={routes.LANDING}/>
      <Menu.Item name='Home' as={Link} to={routes.HOME}/>
      <Menu.Item name='Account' as={Link} to={routes.ACCOUNT}/>
      <Menu.Item name='Sign Out' onClick={auth.doSignOut}/>
    </Menu>
    
  </div>)

const NavigationNonAuth = () => (
  <div>
      <Menu pointing>
        <Menu.Item name='home' as={Link} to={routes.LANDING} />
        <Menu.Item name='Sign In' as={Link} to={routes.SIGN_IN} />
      </Menu>
  </div>
)

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
