import type { ReactNode } from "react";
import { PREFIX } from "./constants";

interface Props {
  children?: ReactNode;
  chevron?: boolean;
  id?: string;
  onChange?: (value: string) => void;
  label?: ReactNode;
  name?: string;
  onClickChevron?: () => void;
  selected?: boolean;
  type?: "single" | "multi";
  value?: string;
}

const blockClass = `${PREFIX}__item`;

const AddSelectItem = (props: Props) => {
  const {
    children,
    chevron,
    id,
    label,
    onChange,
    onClickChevron,
    name,
    selected = false,
    type,
    value,
  } = props;
  const handleOnChange = () => {
    onChange?.(value || "");
  };
  const inputProps = {
    checked: selected,
    id,
    name,
    onChange: handleOnChange,
    type: type === "single" ? "radio" : "checkbox",
  };
  return (
    <li className={blockClass}>
      {type && (
        <div className={`${blockClass}-input`}>
          <input {...inputProps} />
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      {chevron && (
        <button onClick={onClickChevron} className={`${blockClass}-chevron`}>
          {">"}
        </button>
      )}
      {children}
    </li>
  );
};

export default AddSelectItem;
