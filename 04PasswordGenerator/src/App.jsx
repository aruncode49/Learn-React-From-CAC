import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator
  const passwordGenrator = useCallback(() => {
    let pswrd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-`~{}[]";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);

      pswrd += str.charAt(charIndex);
    }

    setPassword(pswrd);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // useEffect
  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, characterAllowed]);

  return <h1 className="text-green-500">Hello World</h1>;
}

export default App;
