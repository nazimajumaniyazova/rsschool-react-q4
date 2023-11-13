import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import CardDetail from './components/CardDetail/CardDetail';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/:id" element={<CardDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
