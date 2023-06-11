import React from 'react'
import './style.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div style={{ height: '100vh' }}>

      <div className='home-bg-image'>
        <div className="container">

          <div className='home-text text-center'>
            <p className='fs-1' style={{ fontWeight: '500' }}>APPLY TODAY AND</p>
            <h1 className='fw-bolder' style={{ fontSize: '70px' }}>Build your Carrer</h1>
          </div>


        </div>

        <div className='container'>
          <div className="row" style={{marginTop:'250px'}}>

            <h2 className='text-center my-5'>OUR SERVICES</h2>

            <div className="col-md-4">
              <div className="card border border-success">
                <div className="card-body">
                  <h5 className="card-title"><i><b>Apply for Intership</b></i></h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iusto explicabo facere voluptatum autem corporis et assumenda perspiciatis adipisci, quaerat minima aspernatur reprehenderit corrupti, dolore totam rerum laborum error ad repellat vero ipsam sequi animi non! Architecto tempore dolorem, deleniti fugit, itaque cumque repudiandae, repellat voluptates mollitia hic cum. Quia?
                  </p>

                </div>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card border border-danger">
                <div className="card-body">
                  <h5 className="card-title"><i><b>Full Time Jobs</b></i></h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum ab enim dolore atque, reiciendis distinctio quasi quas sed praesentium odio. Sint reiciendis illo quos tempore nobis unde itaque repellendus, mollitia deleniti maxime blanditiis aliquid tempora quis nesciunt. Reiciendis, aliquid porro. Quae tempore autem commodi. At, voluptas officia ratione dolore saepe quo vitae a odio natus enim voluptatem fuga similique.
                  </p>

                </div>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card border border-primary">
                <div className="card-body">
                  <h5 className="card-title"><i><b>Part Time Jobs</b></i></h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquid iste ab nisi libero mollitia aperiam, quis cupiditate, error, ducimus totam rerum minima rem ullam odit nihil quibusdam magnam voluptas ipsam. Consectetur dolores, cupiditate vitae reiciendis voluptatum impedit natus fugiat inventore ab voluptatem quam ipsum eaque! Dolores alias odit cum minus rem quaerat, obcaecati ipsa.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>


      <Footer />
    </div>

  )
}

export default Home