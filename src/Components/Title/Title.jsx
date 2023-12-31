import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `ALIVE BABY | ${title}`;
  }, [title]);
};
export default useTitle;
