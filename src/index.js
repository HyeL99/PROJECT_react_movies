import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const {pathname} = useLocation();

useEffect(()=>{
  window.scrollTo(0,0);
},[pathname])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

/*
  설치한 것들

  == movie API 얻어올 사이트 == 
    https://www.themoviedb.org/
    api document : https://developers.themoviedb.org/3/getting-started/introduction

  == 리액트 부트스트랩 ==
    https://react-bootstrap.github.io/
    import 'bootstrap/dist/css/bootstrap.min.css';
    $ npm install react-bootstrap bootstrap

  == 리액트 라우터 ==
    https://reactrouter.com/en/main
    v6.3.0 : https://reactrouter.com/en/v6.3.0
    $ yarn add react-router-dom

  == 리덕스 ==
    https://redux.js.org/
    $ yarn add redux

  == 리덕스 툴킷 == -> 리덕스, 미들웨어, 데브툴 삭제해도 됨
    https://redux-toolkit.js.org/introduction/getting-started
    $ yarn add @reduxjs/toolkit
    
  == 리액트 리덕스 ==
    https://react-redux.js.org/
    $ yarn add react-redux

  == 리액트 아이콘 ==  
    https://react-icons.github.io/react-icons/
    $ npm install react-icons --save

  == 리액트 Sass ==
    $ yarn add sass

  == 리덕스 미들웨어 (redux-thunk) == -> 삭제
    https://redux.js.org/understanding/history-and-design/middleware
    https://github.com/reduxjs/redux-thunk
    $ yarn add redux-thunk

  == 리덕스 데브툴스 == -> 삭제
    https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
    https://github.com/zalmoxisus/redux-devtools-extension
    $ npm install --save redux-devtools-extension

  == Axios ==
    https://axios-http.com/kr/
    $ yarn add axios

  == react multi carousel ==
    https://www.npmjs.com/package/react-multi-carousel
    $ npm install react-multi-carousel --save
    import 'react-multi-carousel/lib/styles.css';

  == react spinners ==
    https://www.davidhu.io/react-spinners/
    $ npm install react-spinners --save

  == react-youtube ==
    https://www.npmjs.com/package/react-youtube
    $ npm i react-youtube
*/