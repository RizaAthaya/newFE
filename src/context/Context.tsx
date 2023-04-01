export interface Context {
  id: number,
  nama: string,
}
export interface tagType {
  id: number,
  nama: string,
  setId: React.Dispatch<React.SetStateAction<Context["id"]>>,
  setNama: React.Dispatch<React.SetStateAction<Context["nama"]>>,
}

