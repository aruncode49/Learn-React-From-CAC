import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("gray");

  // function definition to change the color
  function changeBackroundColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white fixed rounded-lg bottom-8 px-3 py-2">
        <Button color="Red" onclick={changeBackroundColor} />
        <Button color="Green" onclick={changeBackroundColor} />
        <Button color="Blue" onclick={changeBackroundColor} />
        <Button color="Olive" onclick={changeBackroundColor} />
        <Button color="Orange" onclick={changeBackroundColor} />
        <Button color="Gray" onclick={changeBackroundColor} />
        <Button color="Maroon" onclick={changeBackroundColor} />
        <Button color="Black" onclick={changeBackroundColor} />
        <Button color="Magenta" onclick={changeBackroundColor} />
      </div>
    </div>
  );
}
export default App;
