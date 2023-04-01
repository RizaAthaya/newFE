import React, { useState, createContext } from "react";
import { FormData, FormContextType } from "../components/form";

const initialFormData: FormData = {
    nama: "",
    tanggal: "",
    keperluan: "",
    nomor: "",
    alamat: "",
    fasilitas: ""
};

type FormProviderProps = {
    children: React.ReactNode;
};

export const FormContext = createContext<FormContextType>({
    formData: initialFormData,
    setFormData: () => { },
});

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
