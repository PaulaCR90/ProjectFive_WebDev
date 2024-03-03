export const createTable = (tableToCheck, currentPlayer) => {
  const table = document.createElement('div');
  table.className = 'table';
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.className = 'cell';
    square.dataset.index = i;
    table.appendChild(square);
  }
  return table;
};
