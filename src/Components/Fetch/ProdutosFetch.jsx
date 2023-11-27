import React from 'react';
import styles from './ProdutosFetch.module.css';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function fetchItems() {
      try {
        const request = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const response = await request.json();
        setProdutos(response);
      } catch (error) {
        setError('Ocorreu um Erro');
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (error) return <p className="erro">{error}</p>;
  if (loading) return <span className="loading">Loading</span>;
  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} container-listagem animeLeft`}>
      {!produtos && <p>Nenhum Produto Encontrado</p>}
      {produtos.map(({ id, fotos, nome }) => (
        <Link key={id} className={styles.produto} to={`produto/${id}`}>
          <img src={fotos[0].src} alt={fotos[0].titulo} />
          <h2 className={styles.nome}>{nome}</h2>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
