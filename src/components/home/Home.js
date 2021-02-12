import { Link } from 'react-router-dom';
import homeStyles from './Home.module.css';


function Home() {
    return (
        <section className='page-contents'>
            <h1>Hello there!</h1>
            <div className={`${homeStyles.textContainer}`}>
                <p className={`${homeStyles.paragraph}`}>Welcome to my website; built using the React web framework. The entire website, including the UI components you see were created and styled from scratch, by me.</p>
                <p className={`${homeStyles.paragraph}`}>Feel free to expore some of the awesome projects I have completed on the <Link to='/projects' className={`${homeStyles.link}`}>projects page</Link>.</p>
            </div>
            <img src='/images/scrabble.png' className={`${homeStyles.profileImg}`} />
        </section>
    )
}

export default Home;
