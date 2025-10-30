import type { ReactNode } from "react";
import { PREFIX } from "./constants";
import cx from "classnames";

interface Props {
  children?: ReactNode;
  className?: string;
  hierarchy?: boolean;
}

const blockClass = PREFIX;

const AddSelect = (props: Props) => {
  const { children, className, hierarchy } = props;
  return (
    <div
      className={cx(blockClass, className, {
        [`${blockClass}--hierarchy`]: hierarchy,
      })}
    >
      {children}
    </div>
  );
};

export default AddSelect;
