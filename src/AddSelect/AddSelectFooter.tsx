import type { ReactNode } from "react";
import { PREFIX } from "./constants";

interface Props {
  children?: ReactNode;
  primaryButtonDisabled?: boolean;
  primaryButtonText?: string;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
  secondaryButtonDisabled?: boolean;
  secondaryButtonText?: string;
}

const blockClass = `${PREFIX}__footer`;

const AddSelectFooter = (props: Props) => {
  const {
    children,
    primaryButtonDisabled,
    primaryButtonText,
    onClickPrimaryButton,
    onClickSecondaryButton,
    secondaryButtonDisabled,
    secondaryButtonText,
  } = props;

  const hasActions = primaryButtonText || secondaryButtonText;

  return (
    <div className={blockClass}>
      {children}
      {hasActions && (
        <div className={`${blockClass}-actions`}>
          {secondaryButtonText && (
            <button
              disabled={secondaryButtonDisabled}
              onClick={onClickSecondaryButton}
            >
              {secondaryButtonText}
            </button>
          )}
          {primaryButtonText && (
            <button
              disabled={primaryButtonDisabled}
              onClick={onClickPrimaryButton}
            >
              {primaryButtonText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AddSelectFooter;
