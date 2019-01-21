import {Link} from '../routes'

export default  (props) => (

    <nav className={ "navbar navbar-expand-lg " + (props.class || '') }>
    <Link href="/"><a className="navbar-brand">{ props.title }</a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li> */}
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Acerca de
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link  route='about' params={{slug: 'bussines'}} ><a className="dropdown-item" href="/about/bussiness">{props.title}</a></Link>
            <Link  route='about' params={{slug: 'cooperativas'}} ><a className="dropdown-item" href="/about/coop">Cooperativas</a></Link>
            </div>
        </li>
        </ul>
        <div>
            <Link href='/profile'>
                <a>
                    <img className="img-profile" src="https://i.pinimg.com/236x/86/76/70/8676709f7ce5b28e17aae369b3f54759.jpg"/>
                </a>
            </Link>
           
        </div>
    </div>
    </nav>

)