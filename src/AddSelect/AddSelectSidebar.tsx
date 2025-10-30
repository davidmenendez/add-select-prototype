import type { ReactNode } from "react";
import { PREFIX } from "./constants";

interface Props {
  children?: ReactNode;
  selected?: string;
  title?: string;
  titleSlot?: ReactNode;
}

const blockClass = `${PREFIX}__sidebar`;

const AddSelectSidebar = (props: Props) => {
  const { children, selected, title, titleSlot } = props;
  return (
    <div className={blockClass}>
      <div className={`${blockClass}-header`}>
        {titleSlot}
        {title && (
          <div className={`${blockClass}-title-block`}>
            <h2 className={`${blockClass}-title`}>{title}</h2>
            {selected && (
              <span className={`${blockClass}-title-tag`}>{selected}</span>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default AddSelectSidebar;
