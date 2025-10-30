import type { ReactNode } from "react";
import { PREFIX } from "./constants";

interface Props {
  children?: ReactNode;
  description?: string;
  label?: string;
  title?: string;
}

const blockClass = `${PREFIX}__header`;

const AddSelectHeader = (props: Props) => {
  const { children, description, label, title } = props;
  return (
    <div className={blockClass}>
      {title && <h1>{title}</h1>}
      {label && <p>{label}</p>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

export default AddSelectHeader;
