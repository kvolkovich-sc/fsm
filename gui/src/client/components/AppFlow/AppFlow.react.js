import React, { Component, PropTypes } from 'react';
import './AppFlow.less';
import { Value } from '../../flowchart/index';

const propTypes = {};
const defaultProps = {};

export default
class AppFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    console.log('val:', Value.create().toJS());
    return (
      <div className="app-flow">
      </div>
    );
  }
}

AppFlow.propTypes = propTypes;
AppFlow.defaultProps = defaultProps;
