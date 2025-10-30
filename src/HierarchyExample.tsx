import { useState } from "react";
import {
  AddSelect,
  AddSelectBody,
  AddSelectHeader,
  AddSelectFooter,
  AddSelectItem,
  AddSelectColumn,
} from "./AddSelect";
import data from "./data.json";
import AddSelectSidebar from "./AddSelect/AddSelectSidebar";

type Item = {
  guid: string;
  name: string;
  children?: Item[];
};

interface ColProps {
  items: Item[];
  handleSelect: (val: string) => void;
  selected: string[];
}

const Col = (props: ColProps) => {
  const { items, handleSelect, selected } = props;
  const [parent, setParent] = useState<string>("");

  const onClick = (guid: string) => {
    setParent(guid);
  };

  const children =
    parent && items.find((item) => item.guid === parent)?.children;
  return (
    <>
      <AddSelectColumn filter={<input type="text" />} sort={<button>^</button>}>
        <ul>
          {items.map((item) => (
            <AddSelectItem
              id={item.name}
              key={item.guid}
              type="multi"
              onChange={handleSelect}
              value={item.name}
              name="name"
              selected={selected.includes(item.name)}
              label={item.name}
              chevron={!!item.children}
              onClickChevron={() => {
                onClick(item.guid);
              }}
            />
          ))}
        </ul>
      </AddSelectColumn>
      {children && children?.length > 0 && (
        <Col
          key={parent}
          items={children}
          handleSelect={handleSelect}
          selected={selected}
        />
      )}
    </>
  );
};

const HierarchyExample = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((entry) => entry !== value));
    } else {
      setSelected([...selected, value]);
    }
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
      <AddSelectHeader title="Hierarchy example" />
      <AddSelectBody columns>
        <Col items={data} handleSelect={handleSelect} selected={selected} />
      </AddSelectBody>
      <AddSelectSidebar
        title="selections"
        selected={selected.length.toString()}
      >
        {!hasSelections && <p>Nothing selected</p>}
        {selected.map((entry) => (
          <div className="carbon-accordion" key={entry}>
            {entry}
          </div>
        ))}
      </AddSelectSidebar>
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

export default HierarchyExample;
