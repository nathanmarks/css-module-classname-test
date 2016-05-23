import React, {Component, PropTypes} from 'react';
import styles from './Button.css';
import ClassNames from 'classnames';

export default class Button extends Component {

  render() {
    const classNames = ClassNames({
      [styles.button]: true,
      [styles.primary]: true
    }, this.props.className);

    return (
      <button className={classNames}>
        {this.props.children}
      </button>
    );
  }
}
