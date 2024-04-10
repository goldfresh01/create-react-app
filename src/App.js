import './App.css';
import './animate.min.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import News from './components/News.jsx';
import СhoiceColor from './components/СhoiceColor.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='App-wrapper'>
      <Header />
      <Main />
      <News />
      <СhoiceColor />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
