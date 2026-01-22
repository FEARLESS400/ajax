import { useState, useEffect } from 'react'
import axios from 'axios';
import Detail_post from './detail_post';


function Post({ user }) {
  const [details, setDetails] = useState([]);
  const [detailIsSubmited, setdetailIsSubmited] = useState(false);

  
  
  useEffect(() => {
    const getDetails = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/posts'
      );
      setDetails(res.data);
    } 
    getDetails();
  }, []);
  
  const filteredDetails = details.filter(
    (detail) => user.id === detail.userId);

  return (
    <>
        <div className="card my-5 bg-secondary">
          <h2 className="card-header">
            full name: <strong>{user.name} {user.username}</strong> 
          </h2>

            <div className='card-body' >
                <h5 className='card-title'>email: <strong>{user.email}</strong></h5>
                <h5 className="card-text">
                    city: <strong>{user.address.city}</strong>
                </h5>
                <input type="button" value="details post" onClick={() => setdetailIsSubmited(true)}/>
            </div>

            <div className="card-footer">
              <h3 className="color-seccess">Nember of posts: {filteredDetails.length} </h3>
              {
                detailIsSubmited && 
                filteredDetails.map((d) => (
                  <Detail_post 
                    key={d.id}
                    title={d.title} 
                    body={d.body} 
                    /> 
                )) 
              }
            </div>
        </div>
    </>
  )
}

export default Post;