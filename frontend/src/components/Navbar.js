import Nav from 'react-bootstrap/Nav'
import useAxios from '../utils/useAxios'

const Navbar = () =>{

  const api = useAxios()


  const handleExport = async () => {
    const headers = {'Content-Type': 'blob'};
    const config = {method: 'GET', url: '/api/export-excel/', responseType: 'arraybuffer', headers};
    
    
    const response = await api(config);
    
    const outputFilename = `${Date.now()}.xlsx`;

    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', outputFilename);
    document.body.appendChild(link);
    link.click();
  }

  const handleSendPostCard = async () => {
    alert('Post Card Sent !')    
    const response = await api.get('/api/send-postcard/');
  }




  return (
    <Nav>
        <Nav.Item>
            <Nav.Link href="/new-contact">New</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/upload-excel">Upload</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={handleExport}>
            <Nav.Link>Export</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={handleSendPostCard}>
            <Nav.Link>Send Postcard</Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

export default Navbar;