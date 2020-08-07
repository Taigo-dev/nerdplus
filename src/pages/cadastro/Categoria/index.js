import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url).then(async (respotaDoServidor) => {
      const resposta = await respotaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>
      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da categotia "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>{categoria.titulo}</li>
        ))}
      </ul>
      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
