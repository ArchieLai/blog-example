export interface DataType {
  id: Number; 
  title: String; 
  body: String
}

export interface DataContextType {
  data: Array<DataType>;
  page: Number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  token: String;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}