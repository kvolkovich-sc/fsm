import React, { Component } from 'react';
import Types from 'prop-types';
import './Editor.less';
import Value from '../../models/Value';

const propTypes = {

};
const defaultProps = {

};

export default
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || Value.create()
    };
  }

  render() {
    console.log(this.state.value.toJS());
    return (
      <div className="oc-flowchart-editor">

      </div>
    );
  }
}

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;
