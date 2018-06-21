import * as React from "react";
import config from "../config";

interface Props {
  state: any;
  markup: string;
}

const VERSION = config.VERSION;

const desktop: React.StatelessComponent<Props> = ({
  markup,
  state
}) => (
  <html lang="ja">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="description" content={config.DESCRIPTION} />
      <meta name="keywords" content={config.KEYWORDS} />
      <meta name="viewport" content="width=device-width" />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: markup }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__STATE__=${JSON.stringify(state)};`
        }}
      />
      <script src={`/assets/${VERSION}/app_shell.js`} />
    </body>
  </html>
);

export default desktop;
