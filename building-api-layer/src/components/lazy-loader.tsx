import { ReactNode, useEffect, useState } from "react";

type IProps = {
  show?: boolean;
  delay?: number;
  defaultValue?: ReactNode;
};

const LazyLoader = ({ show = false, delay = 0, defaultValue = "" }: IProps) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;
    if (!show) {
      setShowLoader(false);
      return;
    }

    if (delay === 0) {
      setShowLoader(true);
      return;
    } else {
      timeout = setTimeout(() => {
        setShowLoader(true);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, show]);

  return showLoader ? "Loading..." : defaultValue;
};

export default LazyLoader;
