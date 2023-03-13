import MainHeader from "./components/mainHeader/MainHeader";
import Game from "./components/Game";

function App() {
  return (
    <div className="h-screen flex justify-center md:items-center items-end">
      <MainHeader />
      <Game />
    </div>
  );
}

export default App;
