import { useState } from "react";
import {
  AddSelect,
  AddSelectBody,
  AddSelectHeader,
  AddSelectFooter,
  AddSelectItem,
} from "./AddSelect";
import data from "./data.json";

const SingleSelectExample = () => {
  const [selected, setSelected] = useState<string>("");
  const handleSelect = (value: string) => {
    setSelected(value);
  };
  const handleCancel = () => {
    setSelected("");
  };
  const handleSubmit = () => {
    console.log(selected);
  };
  const handleClickChevron = () => {
    console.log("do something");
  };
  const filterSlot = (
    <>
      <div>
        <label>A slot for the search filter</label>
      </div>
      <input type="text" placeholder="filter" />
    </>
  );
  const breadcrumbsSlot = <p>optional crumbs slot</p>;
  return (
    <AddSelect>
      <AddSelectHeader
        title="Add Select single (optional)"
        description="optional description"
        label="optional label"
      />
      <AddSelectBody filter={filterSlot} breadcrumbs={breadcrumbsSlot}>
        <ul>
          {data.map((entry, idx) => (
            <AddSelectItem
              id={entry.name}
              key={entry.guid}
              type="single"
              onChange={handleSelect}
              value={entry.name}
              name="name"
              selected={entry.name === selected}
              label={
                idx !== 3 ? (
                  entry.name
                ) : (
                  <div>
                    example label using <small>nodes</small>
                  </div>
                )
              }
              chevron={!!entry.children}
              onClickChevron={handleClickChevron}
            />
          ))}
        </ul>
      </AddSelectBody>
      <AddSelectFooter
        primaryButtonText="Add"
        onClickPrimaryButton={handleSubmit}
        secondaryButtonText="Cancel"
        onClickSecondaryButton={handleCancel}
        primaryButtonDisabled={!selected}
        secondaryButtonDisabled={!selected}
      />
    </AddSelect>
  );
};

export default SingleSelectExample;
