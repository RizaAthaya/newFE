import React, { useState, createContext } from "react";
import { Context, tagType } from "./Context";

const initial: Context = {
  id: 0,
  nama: "",
};

type TagProps = {
  children: React.ReactNode;
};

export const tagLevelContext = createContext<tagType>({
  id: initial.id,
  nama: initial.nama,
  setId: () => {},
  setNama: () => {},
});
export const tagCountriesContext = createContext<tagType>({
  id: initial.id,
  nama: initial.nama,
  setId: () => {},
  setNama: () => {},
});
export const tagCostContext = createContext<tagType>({
  id: initial.id,
  nama: initial.nama,
  setId: () => {},
  setNama: () => {},
});

export const TagLevelProvider: React.FC<TagProps> = ({ children }) => {
  const [id, setId] = useState<Context["id"]>(initial.id);
  const [nama, setNama] = useState<Context["nama"]>(initial.nama);
  return (
    <tagLevelContext.Provider value={{ id, setId, nama, setNama }}>
      {children}
    </tagLevelContext.Provider>
  );
};

export const TagCountriesProvider: React.FC<TagProps> = ({ children }) => {
  const [id, setId] = useState<Context["id"]>(initial.id);
  const [nama, setNama] = useState<Context["nama"]>(initial.nama);
  return (
    <tagCountriesContext.Provider value={{ id, setId, nama, setNama }}>
      {children}
    </tagCountriesContext.Provider>
  );
};

export const TagCostProvider: React.FC<TagProps> = ({ children }) => {
  const [id, setId] = useState<Context["id"]>(initial.id);
  const [nama, setNama] = useState<Context["nama"]>(initial.nama);
  return (
    <tagCostContext.Provider value={{ id, setId, nama, setNama }}>
      {children}
    </tagCostContext.Provider>
  );
};
