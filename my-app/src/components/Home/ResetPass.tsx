import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserServices from '../../service/user'
import IUser from '../../models/user'

import './style.scss';


const ResetPass = () => {

    const [form] = Form.useForm();
    const history = useNavigate();
    const [user, setUser] = React.useState<any>();
  useEffect(() => {
    (async () => {
      let dataUser = await UserServices.getUser();
      setUser(dataUser);
    })();
  }, []);
  const handelBackLogin = () => {
    history('/');
  };
  const handleSubmit = (values: any) => {
    let index = user.findIndex((item: IUser) => item.email === values.email);
    if (index === -1) {
      Swal.fire({
        icon: 'error',
        title: 'Thông báo',
        text: 'Email không trùng khớp',
        confirmButtonText: 'Đóng',
      });
    } else {
      history(`/newpass/${user[index].id}`);
    }
  };



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
                <h4 className='title-h4'>Đặt mật khẩu lại</h4>
                <p className='title-p'>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                <Form className='' form={form} onFinish={handleSubmit}>
                  <div className='Login-form1'>
                    <Form.Item
                      name={'email'}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập email',
                        },
                        {
                          type: 'email',
                          message: 'Wrong format email!',
                        },
                      ]}
                    >
                      <Input
                        className='Login-input_1'
                        autoComplete='off'
                        placeholder='Nhập email'
                      />
                    </Form.Item>
                  </div>

                  <div className='Login-btn'>
                    <button className='btn-huy' onClick={handelBackLogin}>
                      Hủy
                    </button>
                    <button type='submit'>
                      Tiếp tục
                    </button>
                  </div>
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className='Login-1'>
             <div className='Login-2-img'>
                
             </div>
            
        </div>
      </div>

  );
};

export default ResetPass;