import React from "react";
import Tarefa from "./Tarefa";

function ListaTarefa({ tarefas, setTarefas }) {
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const toggleConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  };

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          marcarConcluido={toggleConcluida}
          removerTarefa={removerTarefa}
        />
      ))}
    </ul>
  );
}

export default ListaTarefa;
