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

export interface scholar {
  name: string;
  open_registration: string;
  close_registration: string;
  provider: string;
  id: number;
  tag_level: number;
  tag_cost: number;
  tag_country: number;
}

