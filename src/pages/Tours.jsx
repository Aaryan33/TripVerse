import React, {useState, useEffect} from 'react'
import CommonSection from "../shared/CommonSection"
import useFetch from '../hooks/useFetch';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Tour.css'
// import tourData from "../assets/data/tours"
import { BASE_URL } from '../utils/config'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(() => {

      const pages = Math.ceil(tourCount / 5)
      setPageCount(pages)
      window.scrollTo(0,0)
  }, [page, tourCount, tours])
  console.log("test",tours);

    // const [pageCount, setPageCount] = useState(0)
    // const [page, setPage] = useState(0)

    // useEffect(() => {

    //     const pages = Math.ceil(5 / 4)
    //     setPageCount(pages)

    // }, [page])
    

  return (
    <>
        <CommonSection title={"All Tours"} />
        <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section>

         <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {
                        tours?.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}> <TourCard tour={tour} /> </Col>))
                     }

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map(number => (
                              <span key={number} onClick={() => setPage(number)}
                                 className={page === number ? 'active__page' : ''}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               }
            </Container>
         </section>
         <Newsletter />
      </>
  )
};

export default Tours










// const Tours = () => {

//     // const { data: tours, loading, error } = useFetch("tours");

//     // if (loading) {
//     //     return (
//     //       <div className="loader-container">
//     //         <div className="loader" />
//     //         <div className="loading-text">Loading...</div>
//     //       </div>
//     //     );
//     // }

//   //  if (error) {
//   //    return <div className="error__msg">Error loading blog details. Check your network</div>;
//   //  }
    

//   return (
//     <div>
//       <CommonSection title={"All Tours"} />
//       <section>
//         <Container>
//           <Row>
//             <SearchBar />
//           </Row>
//         </Container>
//       </section>

//       <section className="pt-0">
//         <Container>
//           <Row>
//             {/* {Array.isArray(tours) &&
//               tours.map((tour) => (
//                 <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
//                   <TourCard tour={tour} />
//                 </Col>
//               ))} */}
//               {
//                 tourData?.map(tour=> <Col lg='3' key={tour.id}> <TourCard tour={tour} /></Col>)
//               }
//           </Row>
//         </Container>
//       </section>
//       <Newsletter />
//     </div>
//   )
// };

// export default Tours