import { useEffect, useState } from "react";
import "./App.css";
import { ContainerRegistry } from "./core/container";
import { Coffe } from "./core/domain/entities/coffe";

function App() {
  const [coffes, setCoffes] = useState<Coffe[]>([]);

  async function getCoffes() {
    const response = await new ContainerRegistry().GetCoffesUseCase.execute();
    setCoffes(response);
  }

  useEffect(() => {
    getCoffes();
  }, []);

  return (
    <>
      <h1>Cafés</h1>
      {coffes.map((coffe) => (
        <p>{coffe.title}</p>
      ))}
    </>
  );
}

export default App;
