import styles from './App.css';

import React, { Component } from 'react';
import Button from './Button/Button';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <div>
          <Button>Hello</Button>
        </div>
        <div>
          <Button className={styles.customButton}>Hello</Button>
        </div>
      </div>
    );
  }

};
