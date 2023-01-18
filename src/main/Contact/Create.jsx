import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { creatContact } from '../../Services/contactServices';
import Spinner from '../Spinner';
import CreateIMG from './CreateIMG';
import { useNavigate } from 'react-router-dom';

const Create = ({ loading, groups }) => {

  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobaile: "",
    email: "",
    job: "",
    group: ""
  })

  const Navigate = useNavigate()


  const setContactInfo = (e) => {
    // setContact({
    //   ...getContact,
    //   [event.target.name]: event.target.value,
    // })

    setContact((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await creatContact(getContact);
      if (status === 201) {
        setContact({})
        Navigate("/contacts")
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }


  return (

    <>
      {
        loading ? (
          <Spinner />
        ) :
          (

            <div className="container pb-50">
              <H2 className='text-center text-info'>ساخت مخاطب جدید</H2>
              <div className="row mt-50 mb-50">
                <div className="col-4 bg-dark rounded-5 py-20 px-40">
                  <form onSubmit={createContactForm}>
                    <div className=" mb-30">
                      <label className="mt-15 text-white"> نام و نام خانوادگی</label>
                      <input type="text" name='fullname' onChange={setContactInfo} className="form-control" required={true} />

                      <label className="mt-15 text-white" > آدرس تصویر </label>
                      <input type="text" name='photo' onChange={setContactInfo} className="form-control" required={true} />

                      <label className="mt-15 text-white"> شماره موبایل</label>
                      <input type="number" name='mobaile' onChange={setContactInfo} className="form-control" required={true} />

                      <label className="mt-15 text-white">آدرس ایمیل </label>
                      <input type="email" name='email' onChange={setContactInfo} className="form-control" required={true} />

                      <label className="mt-15 text-white"> شغل</label>
                      <input type="text" name='job' onChange={setContactInfo} className="form-control" required={true} />

                      <label className="mt-15 text-white"> انتخاب گروه</label>
                      <select className="form-select form-control" name='group' onChange={setContactInfo} required={true}>
                        <option value="" >انتخاب گروه</option>
                        {/* To ensure that the groups is a array of objects use groups.length  */}
                        {groups.length > 0 &&
                          groups.map(
                            (group) => (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            )
                          )
                        }
                      </select>

                    </div>
                    <div className='text-center'>
                      <input type="submit" className='btn bg-white py-10 px-15 rounded-5 ms-15' value="ایجاد مخاطب" />
                      <Link to="/contacts" className="bg-white btn py-10 px-15 rounded-5" >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
                <CreateIMG />
              </div>
            </div>
          )
      }

    </>
  )
}

export default Create;


const H2 = styled.h2`
padding-bottom:40px ;
  border-bottom: 2px solid skyblue;
`