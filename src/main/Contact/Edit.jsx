import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getContact, updateContact } from '../../Services/contactServices';
import Spinner from "../Spinner";
import CreateIMG from "./CreateIMG";

const Edit = ({ loading, groups, setLoading }) => {

    const { contactID } = useParams();
    const Navigate = useNavigate()

    const [editContact, setEditContact] = useState({
        fullname: "",
        photo: "",
        mobaile: "",
        email: "",
        job: "",
        group: "",
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactData } = await getContact(contactID)



                setEditContact(contactData);


                setLoading(false)
            }
            catch (err) {

                console.log(err.message);
                setLoading(false)

            }
        };
        fetchData()
    }, [])


    const setEditContactInfo = (e) => {
        setEditContact((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const data = await updateContact(editContact, contactID);

            setLoading(false)
            if (data) {
                Navigate("/contacts");
            }
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    };


    return (

        <>
            {
                loading ? (
                    <Spinner />
                ) : (

                    <div className="container pb-50 ">
                        <H2 className='text-center text-info'>ویرایش مخاطب</H2>
                        <div className="row mt-50 mb-50 bg-dark align-items-center mx-auto w-75 rounded">
                            <div className="col-md-8  rounded-5 py-10">
                                <form onSubmit={submitForm}>
                                    <div >
                                        <input type="text" name='fullname' onChange={setEditContactInfo} value={editContact.fullname} className="form-control mb-10" placeholder='نام و نام خانوادگی' required={true} />

                                        <input type="text" name='photo' onChange={setEditContactInfo} value={editContact.photo} className="form-control mb-10" placeholder="آدرس تصویر" required={true} />

                                        <input type="number" name='mobaile' onChange={setEditContactInfo} value={editContact.mobaile} className="form-control mb-10" placeholder='شماره موبایل' required={true} />

                                        <input type="email" name='email' onChange={setEditContactInfo} value={editContact.email} className="form-control mb-10" placeholder=" آدرس ایمیل" required={true} />

                                        <input type="text" name='job' onChange={setEditContactInfo} value={editContact.job} className="form-control mb-10" placeholder='شغل' required={true} />

                                        <select className="form-select form-control mb-10" onChange={setEditContactInfo} value={editContact.group} name='group' required={true}>
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
                                        <input type="submit" className='btn bg-white py-10 px-15 rounded-5 ms-15' value="ویرایش مخاطب" />
                                        <Link to="/contacts" className="bg-white btn py-10 px-15 rounded-5" >
                                            انصراف
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-4 d-flex justify-content-sm-center mb-sm-10'>
                                <img src={editContact.photo} className='img-fluid rounded ' alt={editContact.fullname} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <CreateIMG />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Edit;


const H2 = styled.h2`
padding-bottom:40px ;
  border-bottom: 2px solid skyblue;
`
