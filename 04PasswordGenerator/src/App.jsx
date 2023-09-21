import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // take reference of input password
  const passwordRef = useRef(null);

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

  // copyPasswordToClipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="px-4">
      <div className="text-white max-w-[500px] mx-auto bg-gray-700 mt-8 px-4 py-2 rounded-lg text-center">
        <h2 className="text-center text-lg">Password Generator</h2>

        {/* input div */}
        <div className="mt-2 flex gap-4">
          <input
            className="text-orange-500 rounded-md px-2 py-1 outline-none w-full"
            spellCheck="false"
            type="text"
            placeholder="Password"
            value={password}
            id="input"
            readOnly
            ref={passwordRef}
          />
          <label
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 px-2 py-1 border border-white rounded-lg hover:bg-blue-500 cursor-pointer "
            htmlFor="input"
          >
            Copy
          </label>
        </div>

        {/* Dependencies div */}
        <div className="flex items-center justify-center mt-3 text-orange-400 overflow-hidden ">
          <input
            className="cursor-pointer mr-2 w-full md:w-auto"
            min={6}
            max={100}
            value={length}
            type="range"
            onChange={(e) => setLength(e.target.value)}
          />

          <label className="mr-3">Length: ({length})</label>

          <input
            className="mr-1 cursor-pointer"
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="mr-3" htmlFor="numberInput">
            Numbers
          </label>

          <input
            className="mr-1 cursor-pointer"
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label className="mr-3" htmlFor="characterInput">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
