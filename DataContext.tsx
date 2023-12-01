import React, { createContext, Dispatch, SetStateAction } from "react";
import { MCQResponse } from "./types"; // Importing types

interface DataContextType {
  data: MCQResponse[];
  setData: Dispatch<SetStateAction<MCQResponse[]>>;
  currentItem: MCQResponse | undefined;
  setCurrentItem: Dispatch<SetStateAction<MCQResponse | undefined>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
  // correctAnswer?: string;
  minutes: number;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);
