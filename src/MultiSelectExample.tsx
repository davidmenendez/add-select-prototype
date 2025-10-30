import { useState } from "react";
import {
  AddSelect,
  AddSelectBody,
  AddSelectHeader,
  AddSelectFooter,
  AddSelectItem,
} from "./AddSelect";
import data from "./data.json";
import AddSelectSidebar from "./AddSelect/AddSelectSidebar";

const MultiSelectExample = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [metaPanelOpen, setMetaPanelOpen] = useState<boolean>(false);
  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((entry) => entry !== value));
    } else {
      setSelected([...selected, value]);
    }
  };
  const handleMetaToggle = () => {
    setMetaPanelOpen(!metaPanelOpen);
  };
  const handleCancel = () => {
    setSelected([]);
  };
  const handleSubmit = () => {
    console.log(selected);
  };

  const hasSelections = selected.length > 0;
  return (
    <AddSelect hierarchy>
      <AddSelectHeader title="Add Select multi" />
      <AddSelectBody>
        <ul>
          {data.map((entry, idx) => (
            <AddSelectItem
              id={entry.name}
              key={entry.guid}
              type="multi"
              onChange={handleSelect}
              value={entry.name}
              name="name"
              selected={selected.includes(entry.name)}
              label={entry.name}
            >
              {idx === 0 && (
                <button onClick={handleMetaToggle}>view meta data</button>
              )}
            </AddSelectItem>
          ))}
        </ul>
      </AddSelectBody>
      {metaPanelOpen ? (
        <AddSelectSidebar title="meta data">
          <div>
            <div>
              Im the meta view <button onClick={handleMetaToggle}>close</button>
            </div>
            <p>
              its just the sidebar rendered with different children and a
              different title prop. ez-pz
            </p>
          </div>
        </AddSelectSidebar>
      ) : (
        <AddSelectSidebar
          title="selections"
          selected={selected.length.toString()}
        >
          {hasSelections ? (
            selected.map((entry) => (
              <div className="carbon-accordion" key={entry}>
                {entry}
              </div>
            ))
          ) : (
            <p>Nothing selected</p>
          )}
        </AddSelectSidebar>
      )}
      <AddSelectFooter
        primaryButtonText="Add"
        onClickPrimaryButton={handleSubmit}
        secondaryButtonText="Cancel"
        onClickSecondaryButton={handleCancel}
        primaryButtonDisabled={selected.length === 0}
        secondaryButtonDisabled={selected.length === 0}
      />
    </AddSelect>
  );
};

export default MultiSelectExample;
