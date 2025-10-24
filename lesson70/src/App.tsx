import useApi from "./hooks/useApi";
function App() {
  const { data, error, isLoading } = useApi();
  return (
    <>
      {error ? (
        <div>error: {error.message}</div>
      ) : isLoading ? (
        <div>loading...</div>
      ) : (
        data
      )}
    </>
  );
}

export default App;
