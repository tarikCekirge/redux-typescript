import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useCartDispacth: DispatchFunction = useDispatch;
export const useCartSElector: TypedUseSelectorHook<RootState> = useSelector;
