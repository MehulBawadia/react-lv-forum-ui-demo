import { useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-gray-100");
  }, []);

  return (
    <>
      <div className="bg-slate-700 h-2"></div>

      <Header />
    </>
  );
};

export default App;
