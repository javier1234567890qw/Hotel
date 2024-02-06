
import './carrusel.css'

export const Carrousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide height-70vh">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner height-70vh">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/hotel-receptionist-work_23-2149661560.jpg?size=626&ext=jpg&uid=R136330850&ga=GA1.1.1980210894.1706722839&semt=sph"
                        className="d-md-none w-100 h-100" alt="..." />
                        <img
                            src="https://th.bing.com/th/id/R.a2316dae960d4fa8a542a174ee7b4352?rik=w7ukVrzuj4HprA&pid=ImgRaw&r=0"
                            alt="algo"
                            className="d-none d-md-block h-100vh w-100 height-70vh"
                        />
                        <div className="carousel-caption d-block">
                            <h5>first slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <button type="button" className="d-md-none btn btn-outline-secondary">Ver</button>
                        </div>
                    </div>
                    <div className="carousel-item height-70vh">
                        <img src="https://img.freepik.com/free-photo/maldives-island_1203-7337.jpg?size=626&ext=jpg&uid=R136330850&ga=GA1.2.1980210894.1706722839&semt=sph" className="d-md-none w-100 h-100" alt="..." />
                        <img
                            src="https://th.bing.com/th/id/R.a2316dae960d4fa8a542a174ee7b4352?rik=w7ukVrzuj4HprA&pid=ImgRaw&r=0"
                            alt="algo"
                            className="d-none d-md-block height-70vh w-100"
                        />
                        <div className="carousel-caption d-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <button type="button" className="d-md-none btn btn-outline-secondary">Ver</button>
                        </div>
                    </div>
                    <div className="carousel-item height-70vh">
                        <img src="https://img.freepik.com/free-photo/pillow-bed_1203-2819.jpg?size=626&ext=jpg&uid=R136330850&ga=GA1.2.1980210894.1706722839&semt=sph" className="d-md-none w-100 h-100" alt="..." />
                        <img
                            src="https://th.bing.com/th/id/R.a2316dae960d4fa8a542a174ee7b4352?rik=w7ukVrzuj4HprA&pid=ImgRaw&r=0"
                            alt="algo"
                            className="d-none d-md-block height-70vh w-100"
                        />
                        <div className="carousel-caption d-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <button type="button" className="d-md-none btn btn-outline-secondary">Ver</button>
                        </div>
                        <button type="button" className="d-md-none btn btn-outline-success">Success</button>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
