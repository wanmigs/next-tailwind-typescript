import React, { Component } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import 'assets/sass/app.scss';
import SiteLayout from 'layouts/SiteLayout';
import { FloorProvider } from 'service/floors';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <FloorProvider>
        <SiteLayout {...pageProps}>
          <Component {...pageProps} />
        </SiteLayout>
      </FloorProvider>
    );
  }
}

export default MyApp;
