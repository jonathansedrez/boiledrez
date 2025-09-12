import { useState } from "react";
import { Button } from "@components";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Boiledrez</h1>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
    </main>
  );
}
