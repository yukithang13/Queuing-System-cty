import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  LoginAsync,
  selectUser,
  selectUserStatus,
} from '../../slice/user/userSlice';

import { useAppDispatch, useAppSelector } from '../../store/index';
import './style.scss';


const Login = () => {
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const handelLoginForm = (value: any) => {
    dispatch(LoginAsync(value));
  };
  // Hiển thị thông báo đăng nhập thành công hay thất bại
  useEffect(() => {
    if (status === 'idle' && user) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công',
        showConfirmButton: false,
        timer: 1000,
      });

      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        history('/dashboard');
      }, 1200);
    } else if (status === 'failed') {
      Swal.fire({
        title: 'Eror!',
        text: 'Đăng nhập thất bại!',
        icon: 'error',
        confirmButtonText: 'false',
        timer: 1500,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, user]);
  return (
    
      <div className='Login'>
        <div className='Login-content'>
          <div className='Login-content_1'>
            <div className='Login-content_2'>
              <div className='Login-logo'>
                <img
                  src='./imgs/logo.svg'
                  alt='Logo-Alta'
                  className=''
                />
              </div>
              <div className='all'>
                <Form className='' onFinish={handelLoginForm}>
                  <div className='Login-form1'>
                    <Form.Item
                      label='Tên đăng nhập *'
                      name={'tenDangNhap'}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập tên đăng nhập',
                        },
                      ]}
                    >
                      <Input
                        className='Login-input_1'
                        autoComplete='off'
                        placeholder='Nhập tài khoản'
                      />
                    </Form.Item>
                  </div>
                  <div className='Login-form2'>
                    <Form.Item
                      label='Mật khẩu *'
                      name={'matKhau'}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập mật khẩu',
                          
                        },
                      ]}
                    >
                      <Input.Password
                        className='Login-input_2'
                        autoComplete='off'
                        placeholder='Nhập mật khẩu'
                      />
                    </Form.Item>
                  </div>
                  <div className='Login-resetpass'>
                    <Link
                      to='/ResetPass'
                      className=''
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <div className='Login-btn'>
                    <button type='submit' className=''>
                      Đăng nhập
                    </button>
                  </div>
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className='Login-1'>
             <div className='Login-1-img'>
                <h4>Hệ Thống</h4>
                <h3>QUẢN LÝ XẾP HÀNG</h3>
             </div>
            
        </div>
      </div>

  );
};

export default Login;