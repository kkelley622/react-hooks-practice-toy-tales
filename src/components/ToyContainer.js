import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteToy, handleUpdateToy }) {
  return (
    <div id="toy-collection">{toys.map(toy => 
    <ToyCard 
    toy={toy} 
    key={toy.id}
    handleDeleteToy={handleDeleteToy}
    handleUpdateToy={handleUpdateToy}
    />)}
    </div>
  );
}

export default ToyContainer;
