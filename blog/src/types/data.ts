export interface DataType {
  id: Number; 
  title: string; 
  body: string
  created_at: string;
}

export interface DataContextType {
  data: Array<DataType>;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  page: Number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  isLast: boolean;
  setIsLast: React.Dispatch<React.SetStateAction<boolean>>;
}