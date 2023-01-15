import logo from './logo.svg';
import css from './App.module.css';
import Child1 from './components/Child1.jsx';
import Child2 from './components/Child2';

function App() {
  return (
    <div className={css.App}>
      <header className={css.App_header}>
        <img src={logo} className={css.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>CSS Modules</h1>
        <Child1 />
        <Child2 />
      </header>
    </div>
  );
}

export default App;
