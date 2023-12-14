import { TranslateCard } from "./components/TranslateCard";

function App() {
  return (
    <div className="container">
      <div className="translate">

        <TranslateCard actionBtn={true} border={true} changeBtn={true} textarea={true} />
        <TranslateCard actionBtn={false} border={false} changeBtn={false} textarea={false} />

      </div>
    </div>
  );
}

export default App;
