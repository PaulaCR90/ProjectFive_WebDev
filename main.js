import { createContainer } from './src/components/Container/Container';
import { createEvents } from './src/components/Events/Events';
import { createFooter } from './src/components/Footer/Footer';
import { createHeader } from './src/components/Header/Header';
import './style.css';

const App = document.querySelector('#app');
App.appendChild(createHeader());
App.appendChild(createContainer());
App.appendChild(createFooter());

createEvents();
