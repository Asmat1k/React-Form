import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import FormUncontrolled from '../pages/form-uncontrolled';
import FormHook from '../pages/form-hook';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="form1" element={<FormUncontrolled />} />
        <Route path="form2" element={<FormHook />} />
      </Routes>
    </>
  );
}

export default App;
