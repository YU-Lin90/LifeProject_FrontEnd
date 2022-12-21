import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProviders from './Context/ContextProvider';
import './reset.css';
import './CssTemplate.css';
import './style.scss';
//===============================================分隔線================================================
//首頁
import IndexPage from './IndexPage';
//首頁內容
import Home from './Home';
//===============================================分隔線================================================
//登入頁
import LoginPage from './LoginPage';
//===============================================分隔線================================================
//氣象
import Weather from './Weather';
//===============================================分隔線================================================
//404
import NoFound from './NoFound';
//===============================================分隔線================================================
function App() {
  return (
    //全域狀態
    <ContextProviders>
      {/* 路由設定 */}
      <BrowserRouter>
        <Routes>
          {/* 首頁 */}
          <Route path="/" element={<IndexPage />}>
            {/* 首頁內容 */}
            <Route index element={<Home />} />
            {/* 登入頁 */}
            <Route path="login" element={<LoginPage />} />
            {/* 氣象 */}
            <Route path="weather" element={<Weather />} />
          </Route>
          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProviders>
  );
}

export default App;
