import "./App.scss";
import SingleSelectExample from "./SingleSelectExample";
import MultiSelectExample from "./MultiSelectExample";
import HierarchyExample from "./HierarchyExample";
import { useState, type ChangeEvent } from "react";

const App = () => {
  const [type, setType] = useState<string>("single");
  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setType(evt.target.value);
  };
  return (
    <div className="App">
      <select onChange={handleChange} value={type}>
        <option value="single">Single</option>
        <option value="multi">Multi</option>
        <option value="hierarchy">Hierarchy</option>
      </select>
      {type === "single" && <SingleSelectExample />}
      {type === "multi" && <MultiSelectExample />}
      {type === "hierarchy" && <HierarchyExample />}
    </div>
  );
};

export default App;
