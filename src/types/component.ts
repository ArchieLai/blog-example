export interface CardProps {
  title: string;
  index: Number;
  created_at: string;
}

export interface EditProps {
  title: string;
  body: string;
  id: string;
  isCreate: boolean;
}