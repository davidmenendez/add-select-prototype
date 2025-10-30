import type { ReactNode } from "react";
import { PREFIX } from "./constants";

interface Props {
  children?: ReactNode;
  filter?: ReactNode;
  sort?: ReactNode;
}

const blockClass = `${PREFIX}__column`;

const AddSelectColumn = (props: Props) => {
  const { children, filter, sort } = props;
  return (
    <div className={blockClass}>
      {(filter || sort) && (
        <div className={`${blockClass}-header`}>
          {filter && <div className={`${blockClass}-filter`}>{filter}</div>}
          {sort && <div className={`${blockClass}-sort`}>{sort}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default AddSelectColumn;
