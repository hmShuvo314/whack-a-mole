import { createContext, useEffect, useState } from "react";

const gameContext = createContext();
const Provider = gameContext.Provider;

const ContextProvider = ({ children }) => {
  const [currentIdx, setCurrentIdx] = useState(2);
  const [score, setScore] = useState(0);
  const [startOrStop, setStartOrStop] = useState("stop");

  useEffect(() => {
    if (startOrStop === "stop") return;

    setScore(0);

    let interval = async () => {
      const randomIdx = Math.floor(Math.random() * 6);
      const randomAwaitTime = Math.floor(Math.random() * 600) + 400;
      setCurrentIdx(randomIdx);
      await new Promise((resolve) =>
        setTimeout(() => resolve(), randomAwaitTime)
      );
      interval?.();
    };
    interval();

    return () => (interval = null);
  }, [startOrStop]);
  return (
    <Provider
      value={{
        currentIdx,
        setCurrentIdx,
        score,
        setScore,
        startOrStop,
        setStartOrStop,
      }}
    >
      {children}
    </Provider>
  );
};

export { ContextProvider, gameContext };
