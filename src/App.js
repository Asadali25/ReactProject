import { Provider } from 'react-redux';
import Body from '../src/components/body'
import { appStore } from './utils/appStore';

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
      <Body/>

      </Provider>
    </div>
  );
}

export default App;
