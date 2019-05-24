const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src="client/browser.js" defer></script>
                    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
  </html>
`;

export default html;
