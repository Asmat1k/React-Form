import { Routes, Route } from 'react-router-dom';

import { BaseLayout } from './baseLayout';
import Main from '../pages/main';
import FormUncontrolled from '../pages/form-uncontrolled';
import FormHook from '../pages/form-hook';

import './styles/index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Main />} />
          <Route path="form1" element={<FormUncontrolled />} />
          <Route path="form2" element={<FormHook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
