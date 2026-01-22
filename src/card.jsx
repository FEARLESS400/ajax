

function Card({ name, username, email, city }) {
  return (
    <>
        <div className="card my-3">
          <h2 className="card-header">
            full name: {name} {username}
          </h2>
            <div className='card-body' >
                <h5 className='card-title'>email: {email}</h5>
                <p className="card-text">
                    city: {city}
                </p>
            </div>
        </div>
    </>
  )
}

export default Card