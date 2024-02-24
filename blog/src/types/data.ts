export interface DataType {
  id: Number; 
  title: string; 
  body: string
}

export interface DataContextType {
  data: Array<DataType>;
  page: Number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  code: string | string[];
  setCode: React.Dispatch<React.SetStateAction<string>>;
}