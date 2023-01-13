import { Link } from 'react-router-dom';

const Create = () => {
  return (

    <>
      <div className="container">
        <div className="row mt-50 mb-40">
          <div className="col-4 bg-dark rounded-5 py-20 px-40">
            <div class=" mb-30">
              <label for="NameInput" className="mt-15 text-white"> نام و نام خانوادگی</label>
              <input type="name" class="form-control" id="NameInput" required={true} />

              <label for="AdressInput" className="mt-15 text-white" > آدرس تصویر </label>
              <input type="name" class="form-control" id="AdressInput" required={true} />

              <label for="NumberInput" className="mt-15 text-white"> شماره موبایل</label>
              <input type="name" class="form-control" id="NumberInput" required={true} />

              <label for="EmailInput" className="mt-15 text-white">آدرس ایمیل </label>
              <input type="name" class="form-control" id="EmailInput" required={true} />

              <label for="JobInput" className="mt-15 text-white"> شغل</label>
              <input type="name" class="form-control" id="JobInput" required={true} />

              <label for="GroupInput" className="mt-15 text-white"> انتخاب گروه</label>
              <select class="form-select" id="GroupInput" classN="form-control ">
              </select>
            </div>
            <div className="text-center">
              <button className="bg-white py-10 px-15 rounded-5 border-0">ایجاد مخاطب</button>
              <Link to="/contacts" className="bg-white py-10 px-15 rounded-5 border-0 text-decoration-none text-black me-20" >
                انصراف
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Create;