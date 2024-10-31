import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(
    debounce(() => {
      setWidth(window.innerWidth);
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
