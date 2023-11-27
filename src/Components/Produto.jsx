import React from 'react';
import Head from './Head';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [produto, setProduto] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Ocorreu um Erro');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loading) return <span className="loading">Loading</span>;
  if (error) return <p className="erro">{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto}>
      <Head
        title={produto.nome}
        description={`Esse é o produto ${produto.nome}`}
      />
      {produto.code === 'naoexiste' && <p>Nenhum Produto Encontrado</p>}
      <div>
        {produto.fotos.map(({ titulo, src }) => (
          <img key={titulo} src={src} alt={titulo} />
        ))}
      </div>
      <div>
        <h2 className={styles.name}>{produto.nome}</h2>
        <p className={styles.preco}>R$ {produto.preco}</p>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
