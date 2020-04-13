import React, { Component } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import 'assets/sass/app.scss';
import SiteLayout from 'layouts/SiteLayout';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <SiteLayout {...pageProps}>
        <Component {...pageProps} />
      </SiteLayout>
    );
  }
}

export default MyApp;
