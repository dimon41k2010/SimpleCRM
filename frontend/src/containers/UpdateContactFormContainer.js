import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import deleteContact from "../utils/deleteContact"
import useAxios from "../utils/useAxios"
import useQuery from "../utils/useQuery"

const NewContactFormContainer = () => {

  const history = useHistory()
  const [contact, setContact] = useState({
    "first_name":"",
    "last_name":"",
    "email":"",
    "address_line_1":"",
    "address_line_2":"",
    "city":"",
    "state":"",
    "zipcode":"",
    "picture_url":""
  })
  const query = useQuery()

  const api = useAxios()

  useEffect(() => {
    getContact()
  }, [])

  const getContact = async () => {
    let response = await api.get(`/api/contacts/${query.get("id")}`)

    if(response.status === 200){
        setContact(response.data)
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newContact = {
      "id": query.get("id"),
      "first_name":e.target.first_name.value,
      "last_name":e.target.last_name.value,
      "email":e.target.email?.value,
      "address_line_1":e.target.address_line_1?.value,
      "address_line_2":e.target.address_line_2?.value,
      "city":e.target.city?.value,
      "state":e.target.state?.value,
      "zipcode":e.target.zipcode?.value,
      "picture_url":e.target.picture_url?.value
    }

    let response = await api.put('/api/contacts/', newContact )
    history.push('/')
  }

  const handleDelete = () => {
    deleteContact(history,api,query.get("id"));
}

  return <ContactForm handleSubmit={handleSubmit}  submitBtnText={"Update"} contact={contact} handleDelete={handleDelete}/>
}

export default NewContactFormContainer