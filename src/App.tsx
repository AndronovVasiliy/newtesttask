import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import NewsWrapper from './components/News/NewsWrapper';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.mainWrapper}>
        <Routes>
          <Route path = "/" element = {<Main />}/>
          <Route path = "/news" element = {<NewsWrapper />}/>
          <Route path = "/login" element = {<Login />}/>
          <Route path = "/profile" element = {<Profile />}/>
        </Routes>
      </div>
      <div className={style.footer}></div>
    </div>
  );
}

export default App;
