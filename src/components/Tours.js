import Card from "./Card";
// import Filter from "./Filter";

const Tours = ({ tours, removeTour }) => {

    return (
        <div className="container">
            <div>
                <h2 className="title">IPL Trophies</h2>
            </div>

            {/* <Filter /> */}

            <div className="cards">
                {
                    // tours wle data ke liye hr ek data ko map krwa diya
                    tours.map((tour) => {
                        return (
                            // spread operator
                            // tour object ki copy ps kr di
                            <Card key={tour.id} {...tour} removeTour={removeTour} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Tours;
