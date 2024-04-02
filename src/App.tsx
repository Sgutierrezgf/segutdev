import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-orange-300 selection:text-orange-900">
      <div className="relative">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
