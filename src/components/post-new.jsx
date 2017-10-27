import React, { Component } from 'react'
import _ from 'lodash';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, ButtonToolbar, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import App from './app';

import * as Actions from '../actions';

class PostNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: null, categories: null, content: null };
  }

  changeTitle(title) {
    this.setState({ ...this.state, title });
  }

  changeCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  changeContent(content) {
    this.setState({ ...this.state, content });
  }

  clickSave() {
    if (!_.isNumber(this.props.savePost.id)) {
      this.props.setPost(this.state);
    }
  }

  component() {
    return (
      <div className="post-form">
        <Form>
          <FormGroup>
            <ControlLabel>Id:</ControlLabel>
            <FormControl
              type="text"
              value={this.props.savePost.id}
              readOnly
            />
            <HelpBlock>Post´s Id</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl
              type="text"
              onChange={(event) => this.changeTitle(event.target.value)}
            />
            <HelpBlock>Post´s title</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Categories:</ControlLabel>
            <FormControl
              type="text"
              onChange={(event) => this.changeCategories(event.target.value)}
            />
            <HelpBlock>Post´s categories. You should write it with coma separate</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Content:</ControlLabel>
            <FormControl
              componentClass="textarea"
              onChange={(event) => this.changeContent(event.target.value)}
            />
            <HelpBlock>Post´s content</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button
                type="button"
                bsStyle="primary"
                onClick={(event) => this.clickSave()}
                disabled={_.isNumber(this.props.savePost.id)}
              >
                Save
              </Button>
              <Button
                type="button"
                bsStyle="warning"
                href="/post/new"
              >
                Reset
              </Button>
              <Button
                type="button"
                bsStyle="default"
                href="/"
              >
                Back to list
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>

        <Alert bsStyle={this.props.savePost.id ? 'success' : 'info'}>
          {this.props.savePost.id ? `Save with id ${this.props.savePost.id}, press 'Reset' to add other` : 'Press "Save" to save a new content'}
        </Alert>
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
    savePost: state.savePost
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { setPost: Actions.setPost }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
