import { FC, useEffect, useRef } from "react";
import { PopoverPropTypes } from "./types";
import { getPositioningClass } from "./helpers";
import classes from "./Popover.module.scss";

const Popover: FC<PopoverPropTypes> = ({
  visible,
  position,
  onClose,
  children,
}) => {
  const ref = useRef<HTMLUListElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    e.preventDefault();

    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    visible && document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    visible && (
      <ul
        className={[classes.popover, getPositioningClass(position)].join(" ")}
        ref={ref}
      >
        {children}
      </ul>
    )
  );
};

export default Popover;
