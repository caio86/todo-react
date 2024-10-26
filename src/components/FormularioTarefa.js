import React, { useState } from "react";

function FormularioTarefa({ tarefas, setTarefas }) {
  const [titulo, setTitulo] = useState("");

  /**
   * @param {String} titulo
   * */
  const adicionarTarefa = (titulo) => {
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  /**
   * @param {Event} e
   * */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim()) {
      adicionarTarefa(titulo);
      setTitulo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        placeholder="Nova Tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;
