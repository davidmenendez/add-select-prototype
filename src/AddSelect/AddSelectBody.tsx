import type { ReactNode } from "react";
import { PREFIX } from "./constants";
import cx from "classnames";

interface Props {
  children?: ReactNode;
  filter?: ReactNode;
  breadcrumbs?: ReactNode;
  columns?: boolean;
}

const blockClass = `${PREFIX}__body`;

const AddSelectBody = (props: Props) => {
  const { children, filter, breadcrumbs, columns = false } = props;
  return (
    <div
      className={cx(blockClass, {
        [`${blockClass}--columns`]: columns,
      })}
    >
      {filter && <div className={`${blockClass}-filter`}>{filter}</div>}
      {breadcrumbs && (
        <div className={`${blockClass}-breadcrumbs`}>{breadcrumbs}</div>
      )}
      {children}
    </div>
  );
};

export default AddSelectBody;
