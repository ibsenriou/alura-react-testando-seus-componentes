import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

// Jest

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);
  // Encontrar no DOM o INPUT
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  // Encontrar o Botão
  const botao = screen.getByRole("button");
  // Garantir que o INPUT esteja no documento
  expect(input).toBeInTheDocument();
  // Garantir que o Botão esteja desabilitado
  expect(botao).toBeDisabled();
});
