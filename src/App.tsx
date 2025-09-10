import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Boiledrez</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </main>
  );
}
