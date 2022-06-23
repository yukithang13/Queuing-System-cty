import IUser from "../../models/user";
export interface UserState {
    value: IUser | null;
    status: 'idle' | 'loading' | 'failed';
}

export interface LoginPayload{
    tenDangNhap:string;
    matKhau:string;
}