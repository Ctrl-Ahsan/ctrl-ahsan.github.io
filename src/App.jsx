import './App.css';
import Hero from './containers/Hero';
import Nav from './components/Nav';
import Projects from './containers/Projects';
import Technologies from './containers/Technologies';
import Contact from './containers/Contact';

function App() {
  return (
    <main className="App">
      <Nav />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default App;
