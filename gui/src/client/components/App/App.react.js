import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.less';
import createStore from './redux/create';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import ApiClient from './redux/ApiClient';

import { Helmet } from "react-helmet";
import ToolbarContainer from '../ToolbarContainer';
import ViewportContainer from '../ViewportContainer';
import StatusLineContainer from '../StatusLineContainer';
import InspectorContainer from '../InspectorContainer';
import HelpContainer from '../HelpContainer';

import * as viewportActions from '../App/redux/reducer/viewport';
import * as layoutActions from '../App/redux/reducer/layout';
import * as fsmActions from '../App/redux/reducer/fsm';

const client = new ApiClient();
const store = createStore(client);
window.__FSM_REDUX_STORE__ = store;

const propTypes = {

};

const defaultProps = {

};

@connect(
  state => ({
    transitionCreationStarted: state.transitionsMeta.creationStarted,
    transitionDetachedMoveStarted: state.transitionsMeta.detachedMoveStarted
  }),
  dispatch => ({
    actions: bindActionCreators({
      ...viewportActions,
      ...layoutActions,
      ...fsmActions
    }, dispatch) })
)
class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.handleAppRef = this.handleAppRef.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadFsm('machine1');
  }

  handleAppRef(ref) {
    this.props.actions.updateLayoutProperty('appElementRef', ref);
  }

  render() {
    const {
      transitionCreationStarted,
      transitionDetachedMoveStarted
    } = this.props;

    const crosshairCursor = transitionCreationStarted || transitionDetachedMoveStarted;

    return (
      <div className="fsm--app" ref={this.handleAppRef}>
        <Helmet>
          <style type="text/css">
            {crosshairCursor ? `.fsm--app { cursor: crosshair !important; }` : ``}
          </style>
        </Helmet>
        <div>
          <ToolbarContainer />
        </div>
        <div className="fsm--app__middle-container">
          <InspectorContainer />
          <ViewportContainer />
        </div>
        <div>
          <StatusLineContainer />
        </div>
        <div>
          <HelpContainer />
        </div>
      </div>
    );
  }
}

export default
class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <AppLayout />
      </Provider>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
