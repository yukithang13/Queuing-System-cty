export default interface Device {
  id?: string;
  maThietBi: string;
  tenThietBi: string;
  tenDangNhap: string;
  ip: string;
  trangThaiHoatDong: boolean;
  trangThaiKetNoi: boolean;
  matKhau: string;
  dichVuSuDung: string;
  loaiThietBi: 'Kiosk' | 'Hệ Thống';
}