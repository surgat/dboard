import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import _get from 'lodash/get';
import ru from 'antd/lib/locale/ru_RU';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import ConfigProvider from 'antd/lib/config-provider';
import Menu from 'antd/lib/menu';

import { UsCODPage } from './pages/uscod';
import { MonPage } from './pages/mon';
import { ActivePage } from './pages/active';
import { LinksPage } from './pages/links';
import { LocalizationButton } from './components/LocalizationButton';

import 'antd/dist/antd.css';
import './app.scss';

export default () => (
  <ConfigProvider locale={ru}>
    <BrowserRouter>
      <Layout className="layout" style={{ background: '#fff' }}>
        <Header>
          <div className="logo"><span>УСИ</span></div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/cod">Ресурсы</Link></Menu.Item>
            {/* <Menu.Item key="2"><Link to="/gws">Мониторинг</Link></Menu.Item> */}
            <Menu.Item key="3"><Link to="/actions">Активность</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/links">Ссылки</Link></Menu.Item>
          </Menu>
          <div className="Layout__header-right-container">
            <LocalizationButton />
          </div>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/cod">
              <UsCODPage />
            </Route>
            <Route exact path="/gws">
              <MonPage />
            </Route>
            <Route exact path="/actions">
              <ActivePage />
            </Route>
            <Route exact path="/links">
              <LinksPage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  </ConfigProvider>
);

