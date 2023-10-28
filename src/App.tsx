import CardList from './components/CardList/CardList';
import SearchBar from './components/Search/SearchBar';

function App() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <CardList />
      </main>
    </>
  );
}

export default App;
