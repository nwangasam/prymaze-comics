import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAaTZ9Y0o-2T9xt-lT1fR9Y77ITI4yzZqY',
      authDomain: 'prymaze-comics.firebaseapp.com',
      databaseURL: 'https://prymaze-comics.firebaseio.com',
      projectId: 'prymaze-comics',
      storageBucket: 'prymaze-comics.appspot.com',
      messagingSenderId: '813974891517',
      appId: '1:813974891517:web:7818126c38dad49d3b0794',
      measurementId: 'G-X85BDFWCM7',
    };
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <script src='https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js'></script>

          <script src='https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js'></script>

          <script>
            {firebase.initializeApp(firebaseConfig)}
            {firebase.analytics()}
          </script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
