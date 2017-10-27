import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { ListGroup, ListGroupItem, Button, Row, Col, Panel} from 'react-bootstrap';

import App from './app';

import * as Actions from '../actions';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    if (_.isEmpty(this.props.posts)){
      return ( <div>Loading...</div> );
    }
    console.log('this.props.posts', this.props.posts);
    return _.map(this.props.posts, post =>
      <ListGroupItem
        key={post.id}
        className="post-list-item"
        href={`/post/${post.id}`}
      >
        {post.title}
      </ListGroupItem>
    );
  }

  component() {
    return (
      <div className="posts-list">
        <Row>
          <Col xs={10}>
            <h3>Posts</h3>
          </Col>
          <Col xs={2}>
            <Button bsStyle="primary" href="/post/new">Add a Post</Button>
          </Col>
        </Row>
        <ListGroup>
          {this.renderList()}
        </ListGroup>
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

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPosts: Actions.fetchPosts }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
