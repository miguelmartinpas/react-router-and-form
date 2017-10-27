import React, { Component } from 'react';
import { PanelGroup, Panel, Row, Col, Image } from 'react-bootstrap';

import './app.less';

export default class App extends Component {
  render() {
    return (
      <div className="blog-app">
        <PanelGroup>
          <Panel>
            <Row>
              <Col xs={1}>
                <Image src="/assets/logo.png" className="logo" responsive />
              </Col>
              <Col xs={11}>
                <h2>http://reduxblog.herokuapp.com/ Blog</h2>
              </Col>
            </Row>
          </Panel>
          <Panel>
            <Row>
              <Col xs={12}>
                {this.props.component()}
              </Col>
            </Row>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}
