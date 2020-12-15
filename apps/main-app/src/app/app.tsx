import React from 'react';
import { Route, Link } from 'react-router-dom';
import styles from './app.module.scss';
import '../styles.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <h1>Home page</h1>
            <Link to="/about">go to about page</Link>
          </div>
        )}
      />
      <Route
        path="/about"
        exact
        render={() => (
          <div>
            <h1>About page</h1>
            <Link to="/">go to main page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
