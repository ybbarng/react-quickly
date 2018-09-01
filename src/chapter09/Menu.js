import React, { Component } from 'react';
import Link from './Link';

class Menu extends Component {
  render() {
    const menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'
    ];
    return (
      <div>
        {
          menus.map((v, i) => {
            return (
              <div key={i}>
                <Link label={v} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Menu;
