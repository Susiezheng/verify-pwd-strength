'use strict';
import React, { Component } from 'react';
import { message } from 'basicUI';
import { hashHistory, Link } from 'react-router';
import { Breadcrumb, Button, Layout, Menu, Switch, Icon, LocaleProvider } from 'antd';
import Home from './controllers/home/homePage';

export default class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Home />;
  }
}
