import { FC, useEffect, useRef } from "react";
import { PopoverPropTypes } from "./types";
import classes from "./Popover.module.scss";

const Popover: FC<PopoverPropTypes> = ({ visible, onClose, children }) => {
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
      <ul className={classes.popover} ref={ref}>
        {children}
      </ul>
    )
  );
};

export default Popover;
