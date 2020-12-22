import { useContext } from "react";
import { Context } from "./AnswersStore";

const useAnswersStore = () => {
  const [state, dispatch] = useContext(Context);
};
