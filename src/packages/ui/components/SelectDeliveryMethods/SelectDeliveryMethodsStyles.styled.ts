import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative; /* Garante que o select não seja influenciado por outros elementos */
`;

export const Select = styled.select`
  background-color: white;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  appearance: none; /* Remove estilos padrão do navegador */
  width: 150px; /* Define largura padrão */
  max-width: 300px; /* Define um tamanho máximo */
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 3px #007bff;
  }
`;

export const Option = styled.option`
  background-color: white;
  color: black;
`;
