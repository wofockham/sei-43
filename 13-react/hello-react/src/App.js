import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloUser name="Groucho" />
      <HelloUser name="Harpo" />
      <HelloUser />
    </div>
  );
}

export default App;
