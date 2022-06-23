export enum Status {
    PENDING = 'pending',
    USED = 'used',
    REMOVE = 'removed',
  }
  
  export enum Source {
    KIOSK = 'Kiosk',
    SYSTEM = 'Hệ thống',
  }
  
  export default interface Progression {
    id?: string;
    stt: string;
    hoTen: string;
    soDienThoai: string;
    email: string;
    dichVu: string;
    thoiGianCap: Date;
    hanSuDung: Date;
    trangThai: Status;
    nguonCap: Source;
    tenDichVu?: string;
  }