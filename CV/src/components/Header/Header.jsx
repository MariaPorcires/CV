import './Header.css'
import image from '../../assets/self.jpg'

function Header() {


    return(
        <section className='header'>
            <img src={ image } className='header__photo'/>
            <h1 className='header__title'>Maria Porcires</h1>
            <h2 className='header__desc'>Front end-developer</h2>
        </section>
    )
}

export default Header