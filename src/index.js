import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Lesson from './components/Lesson'
import Counter from './components/Counter'
import Properties from './components/Properties'
import Buttons from './components/Buttons'
import Nav from './components/Nav'
import Check from './components/Check'
import Form from './components/Form'
import Func from './components/Func'
import ChangeButtons from './components/ChangeButtons'

// server
import * as serviceWorker from './serviceWorker'
// auto import work! =)
import Autoimport from './components/Autoimport'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { BrowserRouter,Route } from 'react-router-dom'

/* const nav = {
  home: '/home',
  about: '/about',
  contact: '/contacts'
} */

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <hr />
          <p>Pages: </p>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
        <hr />
        <Lesson />
        <Counter />
        <hr />
        <Properties name={'Текст задано, а в рядку нижче буде дефолтний текст'} age={25} />
        <Properties age={35} />
        <Buttons>1</Buttons>
        <Buttons>2</Buttons>
        <Buttons>3</Buttons>
        <hr />
        {/* <Nav nav={nav} /> */}
        <Nav />
        <hr />
        <Check />
        <hr />
        <Form test_state={'test state...'} />
        <hr />
        <Func city={'Lviv'} />
        <hr />
        <ChangeButtons />
        <hr />
        <Autoimport />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
