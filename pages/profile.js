import Link from 'next/link'

import '../public/css/main.css'
import Caja from '../components/cajaInfo'
import Toolbar from '../components/toolbar'

export default () => (
    <div>

        <Toolbar title={'EasyTrans'} class={'navColor navbar-dark'}/>

        <div style={{ textAlign:"center", padding: '60px'}}>
            <h1>Hola Emily</h1>
            <p>Tienes 1 reserva</p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="box" style={{ textAlign: "center"}}>
                        <div>
                            <Link href='/profile'>
                                <a>
                                    <img className="img-profile-big" src="https://i.pinimg.com/236x/86/76/70/8676709f7ce5b28e17aae369b3f54759.jpg"/>
                                </a>
                            </Link>
                        
                        </div>
                        <p>Emily</p>
                        <p>@emily</p>
                    </div>
                </div>
                <div className="col-8">
                    <div className="box" style={{ textAlign: "center", marginBottom: '32px'}}>
                        <p style={{fontWeight: 'bold'}}>Viajes</p>
                        <p>Aqui aparecen los viajes que has realizado y los pendientes.</p>
                    </div>
               
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                    <Caja/>
                </div>
            </div>
        </div>

    </div>
)

