import React, { Component } from 'react';
import Types from 'prop-types';
import './AppFlow.less';
import {
  Value,
  Editor
} from '../../flowchart/index';

const propTypes = {};
const defaultProps = {};

export default
class AppFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="oc-app-flow">
        <Editor

        />
      </div>
    );
  }
}

AppFlow.propTypes = propTypes;
AppFlow.defaultProps = defaultProps;
