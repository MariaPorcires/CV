import './Home.css'
import Header from '../../components/Header/Header'


function Home() {


    return(
        <section className='home'>
            <Header />
            <section className='home__section'>
                <section className='home__links'>
                <span><a href='#' className='home__linkOne'>utbildning</a></span>
                <span><a href='#' className='home__linkTwo'>arbete</a></span>
                <span><a href='#' className='home__linkThree'>om mig</a></span>
                </section>
            </section>

        </section>
    )
}

export default Home