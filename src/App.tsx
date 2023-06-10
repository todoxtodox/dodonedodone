import useAuth from './hooks/useAuth';
import useUser from './hooks/useUser';

function App() {
  const { signInWithGoogle } = useAuth();
  const { data } = useUser();

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>google login</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
