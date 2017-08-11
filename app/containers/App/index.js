/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

export function App(props) {
  return (
    <div className="marginalized whiteBackground">
      <Helmet
        titleTemplate="%s - Auxcon"
        defaultTitle="Auxcon"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
