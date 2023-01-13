import { useNavigate , Navigate} from "react-router-dom";
import { Routes , Route } from "react-router-dom";

import Titel from "./header/TitelHeader";
import Contacts from "./main/Contact/Contacts";
import Create from "./main/Contact/Create";
import Edit from "./main/Contact/Edit";
import View from "./main/Contact/View";
import Time from "./main/Time";


function App() {



  

  return (
    <div className="App">
      <Titel />
      <Time/>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/create" element={<Create/>} />
        <Route path="/contacts/:contactID" element={<View />} />
        <Route path="/contacts/edit/:contactID" element={<Edit />} />
        </Routes>
    </div>
  );
}

export default App;
