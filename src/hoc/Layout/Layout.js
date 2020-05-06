import React, { Component } from 'react';

import Auxi from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
    render () {
      return (
         <Auxi>
            <Toolbar />
            <main className={classes.Content}>
               {this.props.children}
            </main>
         </Auxi>
      );
    }
}

export default Layout;
