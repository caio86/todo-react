import { useState } from "react";
import "./App.css";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefa from "./components/ListaTarefas";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "testando", concluida: false },
    { id: 2, titulo: "testando", concluida: false },
    { id: 3, titulo: "testando", concluida: false },
    { id: 4, titulo: "testando", concluida: false },
    { id: 5, titulo: "testando", concluida: true },
  ]);

  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <FormularioTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <p>Tarefas pendentes: {tarefasPendentes}</p>
      <p>Tarefas concluidas: {tarefasConcluidas}</p>
    </>
  );
}

export default App;
