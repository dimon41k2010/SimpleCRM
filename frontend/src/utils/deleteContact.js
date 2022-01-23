
const deleteContact = async (history,api, id, func) => {
  let response = await api.delete(`/api/contacts/${id}/`)
  history.push('/')
}

export default deleteContact;