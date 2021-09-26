import "src/styles/globals.css";
import React from "react";
import App from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import NavigationBar from "src/components/NavigationBar";
import theme from "src/styles/theme";
import * as AWS from "aws-sdk";
import { ConfigurationOptions } from "aws-sdk";

const configuration: ConfigurationOptions = {
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
};

AWS.config.update(configuration);

type Props = {
  Component: React.Component;
};
/*
 * Use _app.js to extend react applications in Next.js.
 * Note: Per the Next.js docs, using _app.js disables the ability to perform automatic static optimization,
 * causing every page in your app to be server-side rendered.
 * */
class MyApp extends App<Props> {
  render() {
    let { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <NavigationBar />
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    );
  }
}

export default MyApp;
