import { useState, useEffect } from "react";

import Contact from './Contact';
import NotFound from "../NotFound";
import Spinner from "../Spinner";


import { getAllContacts, getAllGroup } from './../../Services/contactServices';


const Contacts = () => {

    const [getContacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    const [getGroup, setGroup] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactsData } = await getAllContacts();
                const { data: groupsData } = await getAllGroup();

                setContacts(contactsData);
                setGroup(groupsData);

                setLoading(false)
            }
            catch (err) {
                setLoading(false)

                console.log(err.message);
            }
        };
        fetchData()
    }, [])


    return (
        <>
            {
                loading ? <Spinner />
                    :

                    <div className="container">
                        <div className="row">
                            {
                                getContacts.length > 0 ? getContacts.map(c => (
                                    <Contact key={c.id} contact={c} />
                                ))
                                    :
                                    <NotFound />
                            }

                        </div>
                    </div>

            }

        </>
    )
}

export default Contacts