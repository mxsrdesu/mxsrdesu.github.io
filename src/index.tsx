/* @refresh reload */
import { render } from 'solid-js/web';
import App from './components/App';

const root = document.getElementById('root');
if (!root) {
  throw new Error('No element with id "root" found');
}

render(() => <App />, root);
