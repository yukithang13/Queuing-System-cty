interface SizeTwo<T> {
  0: T;
  1: T;
}
export default interface Service {
  id?: string;
  maDichVu: string;
  tenDichVu: string;
  moTa: string;
  autoIncrease: SizeTwo<string>;
  prefix: string;
  surfix: string;
  resetEveryDay: Boolean;
  trangThai: Boolean;
}