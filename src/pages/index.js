import React, { Fragment } from 'react';
import Layout from '../components/layout';
import Navigation from '../components/Navigation';
import css from '../../static/css/index.css';
const LandingPage = () => (
  <Fragment>
    <h1>Welcome to Goal Book </h1>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
    <Navigation />
  </Layout>
);
