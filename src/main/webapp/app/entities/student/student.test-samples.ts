import dayjs from 'dayjs/esm';

import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 3965,
};

export const sampleWithPartialData: IStudent = {
  id: 7901,
  name: 'yowza packetise sane',
  code: 'supposing poppy',
  phone: '021 0180 8976',
  address: 'rusty powerfully pounding',
};

export const sampleWithFullData: IStudent = {
  id: 25856,
  name: 'profitable',
  code: 'before quickly unless',
  phone: '0299 7334 9212',
  birthday: dayjs('2024-03-05'),
  address: 'which',
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
