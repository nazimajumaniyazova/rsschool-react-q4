import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
