import React from 'react';
import { compose } from 'recompose';
import Navigation from '../components/navigation';
import Layout from '../components/layout';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../components/Session';

const HomePageBase = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Welcome {authUser.username}</h1>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePageBase);

export default () => (
  <Layout>
    <HomePage />
    <Navigation />
  </Layout>
);
