import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>Social Network</h1>

      <Profile name="Groucho Marx" age="45" motto="No gods no monsters" pic="http://www.fillmurray.com/500/699" />
      <Profile name="Harpo Marx" age="44" pic="http://www.fillmurray.com/501/699" />
      <Profile name="Chico Marx" age="46" motto="No gods no monsters" pic="http://www.fillmurray.com/502/699" />

    </div>
  );
}

export default App;
