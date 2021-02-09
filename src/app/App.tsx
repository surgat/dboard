import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import _get from 'lodash/get';
import ru from 'antd/lib/locale/ru_RU';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import ConfigProvider from 'antd/lib/config-provider';
import Menu from 'antd/lib/menu';

import { UsCODPage } from './pages/uscod';

import 'antd/dist/antd.css';

export default () => (
  <ConfigProvider locale={ru}>
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="/cod">УСЦОД</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/gws">ГВС</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/actions">Инциденты</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/cod">
              <UsCODPage />
            </Route>
            <Route exact path="/gws">
              <div className="site-layout-content">Content</div>
            </Route>
            <Route exact path="/actions">
              <div className="site-layout-content">Content</div>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  </ConfigProvider>
);

