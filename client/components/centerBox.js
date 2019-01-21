import Link from 'next/link'

export default (props) => (
        
    <div className={'centerbox ' + (props.class || "")}>
        <form method="post" action="search" className="d-flex align-items-center" style={{ height: '100%', padding: '16px' }} 
            onSubmit={e => {
                console.log("Click")
            }}>

                <div className="form-group col-3">
                    <label>Salida</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Riobamba</option>
                    </select>
                </div>

                <div className="form-group col-3">
                    <label>Llegada</label>
                    <select className="form-control" id="ab2">
                    <option>Ambato</option>
                    </select>
                </div>

        <div className="form-group  dropdown col-3">
            <label>Pasajeros</label>
            <a className="nav-link dropdown-toggle" id="nvPas" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Boletos
            </a>

            <div className="dropdown-menu" aria-labelledby="nvPas">
                <div className="dropdown-item"><p style={{margin: '0'}}>Adulto</p>  <input  className="w-100 mb-2" type="text" id="adulto" maxLength="2" defaultValue="0"></input></div>
                <div className="dropdown-item"><p style={{margin: '0'}}>Niños menores a 3 años</p>  <input  className="w-100 mb-2" type="text" id="children" maxLength="2" defaultValue="0"></input></div>
                <div className="dropdown-item"><p style={{margin: '0'}}>3ra Edad</p>  <input  className="w-100 mb-2" type="text" id="adulto-b" maxLength="2" defaultValue="0"></input></div>
                <div className="dropdown-item d-flex align-items-center">
                <input  type="checkbox" id="gridCheck1"></input>
                <div style={{ marginLeft:"12px", display: 'inline-block' }}> <p style={{ fontWeight: "bold", margin: "0" }}> Carga </p> <p style={{display: "block",margin: "0", fontSize: "12px"}}> En caso de llevar no se cobra extras </p></div>
                
                </div>
            </div>
        </div>

                <Link href="/search">  
                    <a style={{margin: 'auto',    width: '100%'}} className="btn btn-primary">Buscar</a> 
                </Link>

        </form>
    </div>
    
)