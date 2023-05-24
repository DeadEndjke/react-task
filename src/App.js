
import s from './App.module.scss';
import Content from './components/content/Content';
import Header from './components/header/Header';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Content/>
    </div>
  );
}

export default App;
