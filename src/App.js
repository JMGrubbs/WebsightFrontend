import './css/App.css';
import { React } from 'react';
import AppRouter from './AppRouter';
import config from './config.json';


const App = () => {
  const configAPI = config

  // useEffect(() => {
  //   setConfigAPI(config);
  //   setConfigAPI = config;
  // }, []);

  return (
    <AppRouter config={configAPI}/>
  );
}

export default App;
