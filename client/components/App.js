import React from 'react';
import { RedocStandalone } from 'redoc';
import '../scss/styles.scss';

const theme = {
  colors: {
    primary: {
      main: '#e53935'
    },
    http: {
      get: '#c0684c',
      post: '#4cb4d6'
    }
  },
  schema: {
    labelsTextSize: '1rem'
  },
  sidebar: {
    width: '230px',
    backgroundColor: '#000000',
    textColor: '#fff',
    activeTextColor: (t) => t.colors.primary.main,
    fontFamily: 'Open Sans'
  },
  logo: {
    maxHeight: ({ sidebar: menu }) => menu.width,
    maxWidth: ({ sidebar: menu }) => menu.width,
    gutter: '1.5rem'
  },
  typography: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontFamily: 'Open Sans',
    headings: {
      fontFamily: 'Open Sans',
      lineHeight: '1.5rem'
    },
    code: {
      fontSize: '1rem',
      fontFamily: 'Fira Code',
      color: '#0f0',
      backgroundColor: '#0e1419'
    },
    links: {
      color: '#ff2612'
    }
  },
  rightPanel: {
    backgroundColor: '#000',
    width: '40%',
    textColor: '#fff'
  },
  codeBlock: {
    backgroundColor: '#0e1419'
  }
};

const App = () => {
  return (
    <RedocStandalone
      specUrl={`${process.env.PUBLIC_URL}/documentation.yaml`}
      options={{ theme, hideDownloadButton: true, menuToggle: true }}
    />
  );
};

export default App;
