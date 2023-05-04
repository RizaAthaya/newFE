import React, { useState, createContext } from "react";
import { scholar } from "./Context";

export interface scholarData {
  name: string;
  open_registration: string;
  close_registration: string;
  provider: string;
  id: number;
  tag_level: number;
  tag_cost: number;
  tag_country: number;
}

export interface ScholarContextType {
  scholarship: scholarData;
  setScholarship: React.Dispatch<React.SetStateAction<scholarData>>;
}

type ScholarProviderProps = {
  children: React.ReactNode;
};

const initial: scholar = {
  name: "",
  open_registration: "",
  close_registration: "",
  provider: "",
  id: 0,
  tag_level: 0,
  tag_cost: 0,
  tag_country: 0,
};

export const ScholarContext = createContext<ScholarContextType>({
  scholarship: initial,
  setScholarship: () => {},
});

export const ScholarProvider: React.FC<ScholarProviderProps> = ({
  children,
}) => {
    // const [formData, setFormData] = useState<FormData>(initialFormData);
    const [scholarship, setScholarship] = useState<scholarData>(initial);
  return (
    <ScholarContext.Provider value={{scholarship, setScholarship}}>
      {children}
    </ScholarContext.Provider>
  );
};
