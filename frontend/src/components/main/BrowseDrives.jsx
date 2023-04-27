import React from 'react'

const BrowseDrives = () => {

    const [allDrivesData, setAllDrivesData] = useState([]);

    const [loading, setLoading] = useState(false);


    const fetchAllDriveData = async () => {
        setLoading(true);
        const res = await fetch("http://localhost:5000/add_jobs/getall");
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setAllDrivesData(data);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchAllDriveData();
    }, []);

    const displaySpaceData = () => {
        if (!loading) {
            return (
                allDrivesData.map((drive, index) => (

                    <div className="row justify-content-center mb-3" key={drive._id}>
                        <div className="col-md-12 col-xl-12">
                            <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                {/* <img
                                                    // src={space.image ? space.image : "/images/space-placeholder.jpg"}
                                                    src={'http://localhost:5000/' + space.image}
                                                    className="w-100"
                                                    alt=""
                                                /> */}
                                                <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div
                                                            className="mask"
                                                            style={{
                                                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                                                            }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6">
                                            <h3>Job Type : {drive.jobType}</h3>

                                            <div className="mt-1 mb-0 text-muted small">
                                                <span className="text-primary"> • </span>
                                                <span>{drive.reg_Link}</span>

                                            </div>

                                            <p className="text-truncate mb-4 mb-md-0">
                                                {space.facilities}
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">₹{space.rate}</h4>

                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <Link to={`/user/book/${space._id}`} className="btn btn-primary btn-sm" type="button">
                                                    Book Now
                                                </Link>
                                                <Link to={`/main/spacedetails/${space._id}`}
                                                    className="btn btn-outline-primary btn-sm mt-2"
                                                    type="button"
                                                >
                                                    More Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            );
        } else {
            return <div>Loading...</div>;
        }
    };



    return (
        <div>{displaySpaceData()}</div>
    )
}

export default BrowseDrives