import { useEffect } from "react";

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | MDP Terminal`;

    return () => {
      document.title = "MDP Terminal";
    };
  }, [title]);
};
