import useAuth from './hooks/useAuth';

function App() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>google login</button>
    </div>
  );
}

export default App;
