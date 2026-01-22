
function Detail_post({title, body}) {
  return (
    <>
        <div className="card my-3 p-5 bg-light">
          <div className="card-header">
            <h5>
                title: {title}
            </h5>
          </div>
            <div className='card-body' >
                <p className='card-text'>body: <strong>{body}</strong></p>
            </div>
        </div>
    </>
  )
}

export default Detail_post;