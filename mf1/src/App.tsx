import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Mf1 from './Mf1';
import { customElement } from 'solid-element';

customElement('mf1-component',{}, ()=>{
  return Mf1
})

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <mf1-component></mf1-component>
      <Mf1></Mf1>
    </div>
  );
};

export default App;
