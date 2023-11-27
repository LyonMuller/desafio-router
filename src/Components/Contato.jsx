import React from 'react';
import styles from './Contato.module.css';
import Head from './Head';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head
        title="Contato"
        description="Essa é a descrição da Página de Contato"
      />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Contato</h1>
        <p>Entre em contato</p>
        <ul className={styles.dados}>
          <li>iam@lyon.dev</li>
          <li>(47) 9 8913-0823</li>
          <li>Joinville, SC - Brasil</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
