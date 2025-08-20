import RouteLayout from "./routes/RouteLayout";

export default function App() {
  return (
    <>
      <div className="flex">
        <aside className="h-screen bg-sky-200 border-r-2 border-r-blue-500">aside</aside>
        <div className="flex flex-col justify-between w-full">
          <div>
            <header className="bg-sky-200">header</header>
            <div>
              <main className="container mx-auto"><RouteLayout/></main>
            </div>
          </div>
          <footer className="bg-sky-200">footer</footer>
        </div>
      </div>
    </>
  );
}
