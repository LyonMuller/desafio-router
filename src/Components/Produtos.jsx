import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import Produtos from './Fetch/ProdutosFetch';

const Home = () => {
  return (
    <div className={styles.produtos}>
      <Head
        title="Produtos"
        description="Essa é a descrição da Página de Produtos"
      />
      <Produtos />
    </div>
  );
};

export default Home;
