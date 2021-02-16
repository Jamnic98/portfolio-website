import { Link } from 'react-router-dom';
import Emoji from '../Emoji';
import homeStyles from './Home.module.css';


const Home = () => {

  return (
    <section className='page-contents'>
      <h1> Hello there! <Emoji symbol='👋' /></h1>
      <div className={`${homeStyles.homePage}`}>
        <header>
          <p className={`${homeStyles.paragraph}`}>
            Welcome to my website; built using the React web framework.
            The entire website, including the UI components you see, were created and styled from scratch, by me.
          </p>
        </header>
        <h2>About Jamie <Emoji symbol='👨‍💻' /></h2>
        <p className={`${homeStyles.paragraph}`}>
          Building things, solving problems and technology have always captivated me, which is probably why I enjoy coding so much.
          I have experience with a variety of programming languages, such as Java, C, C++ and VBA but feel most confident using Python and JavaScript
          as those are the ones I have practiced the most.
        </p>
        <p className={`${homeStyles.paragraph}`}>
          I enjoy learning new skills and am always expanding on my programming knowledge.
          In terms of hobbies, I read daily, mostly non-fiction books on skill development, autobiographies and self-help books.
          Also, I love to cook and prepare dinner for my family most days.
        </p>
        <h2>Projects <Emoji symbol='🔨💻' /></h2>
        <p className={`${homeStyles.paragraph}`}>
          Feel free to explore some of the awesome programming projects I have completed on the <Link to='/projects' className={`${homeStyles.link}`}>projects page</Link>.
        </p>
      </div>
      <img src='/images/profile-picture.jpg' alt='' className={`${homeStyles.profileImg}`} />
    </section>
  )
}

export default Home;
