import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(
    debounce(() => {
      setWidth({ width: window.innerWidth, height: window.innerHeight });
    }, 1500),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // cleanup
      handleResize.cancel(); // debounce 취소
    };
  }, [handleResize]);
  //
  return width;
}

export default useWindowWidth;
