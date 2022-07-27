import List from "./components/List";
import Details from "./components/Details";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  console.log("render Todo");
  const [info, setInfo] = useState();
  const [todo, setTodo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [count] = useState(0);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const url =
      " https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
    const params = { signal: controller.signal };
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [count]);

  const selectUser = (user) => {
    return () => {
      setInfo(user);
    };
  };

  return (
    <div className="page">
      {isLoading && <p>Loading...</p>}
      <List todo={todo} onClick={selectUser}></List>
      <Details info={info} />
    </div>
  );
}

export default App;
