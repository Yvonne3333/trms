import { useEffect, useState } from "react";
import { useInitializeApi, getFormNxpDetailsAsync } from "./api";
import { NXPDETAILS } from "./models";
import Contact from "./components/Contact";
import Bank from "./components/Bank";


const App = () => {
const [id, setId] = useState("61584118")
const [formDetails, setFormDetails] = useState<NXPDETAILS>()

const http = useInitializeApi()
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await http;
        try {
          const { responseResult } = await getFormNxpDetailsAsync(id);
         console.log(responseResult)
          setFormDetails(responseResult);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div >
 
      {/* <Bank formDetails={formDetails}/> */}
      {/* <Contact formDetails={formDetails}/> */}
    </div>
  )
}

export default App