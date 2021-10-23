import logo from "./assets/logo.png";
import PlaySound from "./components/PlaySound";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="App">
      <div className="lg:container lg:mx-auto dark:bg-gray-800 relative">
        <div className="absolute right-0 mt-20">
          <span
            onClick={() => setTheme(!colorTheme)}
            className="w-10 h-10 bg-indigo-500 block rounded-full cursor-pointer shadow-lg curser-pointer text-white flex items-center justify-center"
          >
            {colorTheme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </span>
        </div>
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
            <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-purple-700 hover:border-purple-500 rounded discord mt-8">
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
