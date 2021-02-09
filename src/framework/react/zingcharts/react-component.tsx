import React from 'react';
import zingchart from 'zingchart/es6';

export default class Zingchart extends React.Component<{ id: any, data: any }> {
  componentDidMount() {
    zingchart.render({
      id: this.props.id,
      data: this.props.data
    });
  }

  componentDidUpdate() {
    zingchart.render({
      id: this.props.id,
      data: this.props.data
    });
  }

  render() {
    return (
      <div id={this.props.id}></div>
    );
  }
}

