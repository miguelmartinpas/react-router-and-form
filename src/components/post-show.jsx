import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Button, ButtonToolbar} from 'react-bootstrap';


import App from './app';

import * as Actions from '../actions';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  component() {
    if (_.isEmpty(this.props.post)) {
      return ( <div>loading...</div> );
    }
    return (
      <div>
        <p>Title: {this.props.post.title}</p>
        <p>Categories: {this.props.post.categories}</p>
        <p>Content: {this.props.post.content}</p>
        <ButtonToolbar>
          <Button
            type="button"
            bsStyle="default"
            href="/"
          >
            Back to list
          </Button>
        </ButtonToolbar>
      </div>
    );
  }

  render() {
    return (
      <div>
        <App component={() => this.component()}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    fetchPosts: Actions.fetchPosts
  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
