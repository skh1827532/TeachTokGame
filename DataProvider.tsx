// DataProvider.tsx
import React, { useState, FC, useEffect } from "react";
import { DataContext } from "./DataContext";
import { MCQResponse } from "./types"; // Ensure this is the correct path to your types

export const DataProvider: FC = ({ children }) => {
  const [data, setData] = useState<MCQResponse[]>([]);
  const [currentItem, setCurrentItem] = useState<MCQResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [id, setId] = useState<number | undefined>(undefined);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((minutes) => minutes + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchCorrectAnswer = async (itemId: number): Promise<string> => {
    try {
      const response = await fetch(
        `https://cross-platform.rp.devfactory.com/reveal?id=${itemId}`
      );
      const answerData = await response.json();
      return answerData.correct_options[0].answer;
    } catch (err) {
      console.error("Error fetching correct answer", err);
      return "";
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://cross-platform.rp.devfactory.com/for_you"
      );
      const nextItem: MCQResponse = await response.json();

      setId(nextItem.id);
      const correctAnswer = await fetchCorrectAnswer(nextItem.id);
      nextItem.correctAnswer = correctAnswer; // Set correct answer in the MCQResponse object

      setData((prevData) => [...prevData, nextItem]);
      setCurrentItem(nextItem);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (id) {
      fetchCorrectAnswer(id);
    }
  }, [id]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        currentItem,
        setCurrentItem,
        loading,
        setLoading,
        fetchData,
        minutes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
