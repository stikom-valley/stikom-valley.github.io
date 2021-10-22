import logo from './assets/logo.png';
import PlaySound from "./components/PlaySound";

function App() {
  return (
    <div className="App">
      <div className="lg:container lg:mx-auto">
        <div className="flex justify-center">
          <img src={logo} alt="stikomvalley-logo" width="256" />
        </div>
        <div className="text-center font-mono text-lg text-gray-800 text-center">
          <p className="font-bold">stikomvalley.org</p>
          <p>a bunch of tech-loving crazies</p>
        </div>
        <div className="mt-8 text-center">
          <p className="font-black text-3xl">Hangout with us, digitally.</p>
          <a href="https://discord.gg/XAaXrKE" target="_blank">
            <button
              className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-purple-700 hover:border-purple-500 rounded discord mt-8"
            >
              Join Discord Server
            </button>
          </a>
          <PlaySound />
        </div>
      </div>
    </div>
  );
}

export default App;
