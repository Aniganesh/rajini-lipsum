import { createRoot } from 'react-dom/client';
import Settings from '../Components/settingsPage';


console.log({root: document.querySelector('#app')});
// create a root
const root = createRoot(document.querySelector('#app')!);

//render app to root
root.render(<Settings />);