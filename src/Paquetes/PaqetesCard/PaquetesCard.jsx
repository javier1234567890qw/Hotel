import './paquetes.css'


export const PaquetesCard = ({id, personas,Descripcion}) => {


    return (
        <div >
            <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.pinimg.com/564x/2a/c5/00/2ac5001792794643bb384ab3944ace81.jpg" className="card-img-rigth" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{id}</h5>
                            <p className="card-text">{personas}</p>
                            <p className="card-text">{Descripcion}</p>
                            <button type="button" className="btn btn-outline-primary ">Alquilar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
