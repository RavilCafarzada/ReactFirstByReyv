import './App.css';
import Header from './components/Header/Header';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  const links = ['Home', 'About', 'Blog', 'Contact', 'Our Team']

  const name = 'Ravil'

  return (
    <div className="App">
      
       <Header navbar = {links}/> 

       <WelcomeMessage username = {name} />

    </div>
  );
}

export default App;
