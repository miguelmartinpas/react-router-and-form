import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

// import App from './components/app';
import PostIndex from './components/post-index';
import PostShow from './components/post-show';
import PostNew from './components/post-new';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
        <Route path="/post/:id" component={PostShow} />
        <Route path="/post/new" component={PostNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
