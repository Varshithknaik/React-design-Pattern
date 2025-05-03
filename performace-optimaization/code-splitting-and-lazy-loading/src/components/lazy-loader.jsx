import { useState, useEffect } from "react";

const LazyLoader = ({ show = false, delay = 0 }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;
    if (!show) {
      setShowLoader(false);
      return;
    }

    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, show]);

  return showLoader ? <h3>Loading...</h3> : null;
};

export default LazyLoader;
