import { useHistory } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import useAxios from "../utils/useAxios"

const NewContactFormContainer = () => {

  const history = useHistory()
  

  const defContact = {
    "first_name":"",
    "last_name":"",
    "email":"",
    "address_line_1":"",
    "address_line_2":"",
    "city":"",
    "state":"",
    "zipcode":"",
    "picture_url":""
  }

  const api = useAxios()

    

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newContact = {
      "first_name":e.target.first_name.value,
      "last_name":e.target.last_name.value,
      "email":e.target.email.value,
      "address_line_1":e.target.address_line_1?.value,
      "address_line_2":e.target.address_line_2?.value,
      "city":e.target.city?.value,
      "state":e.target.state?.value,
      "zipcode":e.target.zipcode?.value,
      "picture_url":e.target.picture_url?.value
    }
    console.log(newContact)
    const response = await api.post('/api/contacts/', newContact )
    history.push('/')
  }

  return <ContactForm handleSubmit={handleSubmit}  submitBtnText={"Create"} contact={defContact}/>
}

export default NewContactFormContainer