// import { printAndChange } from '../printAndChange/printAndChange';

// export const Table = () => {
//   const table = document.createElement('div');
//   table.className = 'table';
//   for (let i = 0; i < 9; i++) {
//     const square = document.createElement('div');
//     square.className = 'cell';
//     square.dataset.index = i;
//     square.addEventListener('click', () => printAndChange(square, table));
//     table.appendChild(square);
//   }
//   return table;
// };

import { table } from '../../sources/sources';
import { printAndChange } from '../printAndChange/printAndChange';

export const Table = () => {
  const tableElement = document.createElement('div');
  tableElement.className = 'table';

  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.className = 'cell';
    square.dataset.index = i;
    square.addEventListener('click', () => printAndChange(square, table));
    tableElement.appendChild(square);
  }

  return tableElement;
};
