export interface FormData {
    nama: string;
    tanggal: string;
    keperluan: string;
    nomor: string;
    alamat: string;
    fasilitas: string
};

export interface FormContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
