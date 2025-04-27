import {Link} from "react-router-dom";




const Home = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <div>
                <section>
                    <h1>Buzzly</h1>
                    <p>An opinionated toast component for React.</p>
                    <div>
                        <button>Exemple</button>
                        <Link to={'/https://github.com/mohamed-elhaissan/Buzzly'}>Github</Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home;