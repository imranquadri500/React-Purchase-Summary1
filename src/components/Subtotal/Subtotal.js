import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SubTotal extends Component {
  render() {
    return (
      <Row className="show-block">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>
          <strong>{`$${this.props.price}`}</strong>
        </Col>
      </Row>
    );
  }
}
