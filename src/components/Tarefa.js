import React from "react";

export default function Tarefa({ tarefa, marcarConcluido, removerTarefa }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => marcarConcluido(tarefa.id)}
      />
      <span
        style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}
      >
        {tarefa.titulo}
      </span>
      <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </li>
  );
}
