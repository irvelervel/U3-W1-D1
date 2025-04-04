import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeStudent from './WelcomeStudent'
import Hello from './Hello'
import LinkComponent from './LinkComponent'

// i commenti sono scritti come in JS

// Un componente REACT può essere semplice come questo file: una funzione che
// ritorna del JSX
// cos'è il JSX? è una sintassi simile ad HTML con molte potenzialità in più
// le differenze principali sono il fatto che le classi CSS vanno indicate con
// la parola "className", e che i valori di ritorno delle funzioni o dei componenti
// devono ritornare un SINGOLO PADRE

const App = () => {
  return (
    <>
      <header>
        <LinkComponent testo="EPICODE" link="https://epicode.com" />
        <LinkComponent testo="GOOGLE" link="https://google.com" />
        <LinkComponent testo="MDN" link="https://developer.mozilla.org/" />
      </header>
      <main>
        {/* questo è un REACT FRAGMENT */}
        {/* un tag "vuoto" che serve solo a far rispettare la regola del
      singolo parent su molteplici elementi */}
        <Hello topogigio="coccole!" />
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <WelcomeStudent />
        <h1>CIAO EPICODE</h1>
        {/* qui metto WelcomeStudent */}
        <WelcomeStudent />
        <Hello />
        {/* devo importarlo in cima al file */}
      </main>
    </>
  )
}

export default App
