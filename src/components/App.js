import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(toy) {
    setToys([...toys, toy])
  }

  function handleRemoveToy(id) {
    const updatedToys = toys.filter(toy => toy.id !== id);
    setToys(updatedToys)
  }

  function handleDeleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then((res) => {
      if(res.status === 200) {
        handleRemoveToy(id)
      }
    })
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) => toy.id === updatedToy.id ? updatedToy : toy);
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddNewToy={handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys} 
      handleDeleteToy={handleDeleteToy}
      handleUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
