import { Provider } from 'react-redux';
import store from './store/store';

import ImportButton from './components/ImportButton';
import HtmlBox from './components/HtmlBox';
import CompareButton from './components/CompareButton';

import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className='text-center'>
          <h1>Document Viewer</h1>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div>
            <ImportButton documentNumber={1} />
            <HtmlBox documentNumber={1} />
          </div>
          <div>
            <ImportButton documentNumber={2} />
            <HtmlBox documentNumber={2} />
          </div>
          <div>
            <CompareButton />
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
