import './Profile.scss'
const Profile = () => {
  return (
    <>
      <div className='proflie-container'>
        <div className='des'>
          <div>Hồ Sơ Của Tôi</div>
          <div>Quản lí thông tin hồ sơ để bảo mật tài khoản</div>
          <hr />
        </div>
        <div className='infor'>
          <div className='infor-left'>
            <div>Email</div>
            <div>Tên</div>
            <div>Số điện thoại</div>
            <div>Địa chỉ</div>
            <div>Ngày sinh</div>
          </div>
          <div className='infor-right'>
            <div>duy.bui****@gmail.com</div>
            <div>
              <input type='text' />
            </div>
            <div>
              <input type='text' />
            </div>
            <div>
              <input type='text' />
            </div>
            <div className='selected'>
              <select className='selected-item'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <select className='selected-item'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <select className='selected-item'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className='avatar'>
            <div className='img'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4JWdrzCwY2owucPdunvUNiBWZBV3n7KYRA&s' />
            </div>
            <input type='file' style={{ display: 'none' }} />
            <div className='button'>
              <button>Chọn Ảnh</button>
            </div>
            <div>
              Dung Lượng File tối đa 1MB
              <br />
              Định dạng:.JPEG, .PNG
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
