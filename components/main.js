import Link from 'next/link'
import CenterBox from '../components/centerBox'

export default  (props) => (
    <div className="backimage d-flex align-items-center">
    <div className="w-100">
    <div className="titulo-1">
            <h1>{props.title}</h1>
            <p>Esta es una descripcion</p>
    </div>

    <CenterBox class={'w-75'}/>

    <div className="subtitulo-1" >
            <p style={{maxWidth: '35%',margin: '0 auto', marginBottom: '-154px'}}> EIGT - EasyTrans, diseño de una pagina web de comprar de boletos. 2019</p>
    </div>
    </div>

</div>

)