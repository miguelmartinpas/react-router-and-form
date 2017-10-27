import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

// import App from './components/app';
import PostIndex from './components/post-index';
import PostShow from './components/post-show';
import PostNew from './components/post-new';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/post/new" component={PostNew} />
        <Route path="/post/:id" component={PostShow} />
        <Route exact path="/" component={PostIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
