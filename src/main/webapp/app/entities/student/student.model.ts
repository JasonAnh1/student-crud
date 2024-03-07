import dayjs from 'dayjs/esm';

export interface IStudent {
  id: number;
  name?: string | null;
  code?: string | null;
  phone?: string | null;
  birthday?: dayjs.Dayjs | null;
  address?: string | null;
}

export type NewStudent = Omit<IStudent, 'id'> & { id: null };
