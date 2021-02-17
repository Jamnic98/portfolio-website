import { Link } from 'react-router-dom';
import Emoji from '../Emoji';
import homeStyles from './Home.module.css';


const Home = () => {

  return (
    <section className='page-contents'>
      <h1>Hello there! <Emoji symbol='👋' /></h1>
      <header>
        <p className={`${homeStyles.paragraph}`}>
          Welcome to my website; built using the React web framework.
          The entire website, including the UI components you see, were created and styled from scratch, by me.
          </p>
      </header>
      <div className={`${homeStyles.homePage}`}>
        <h2>About Jamie <Emoji symbol='👨‍💻' /></h2>
        <p className={`${homeStyles.paragraph}`}>
          Technology and solving problems have always captivated me, which is probably why I enjoy coding so much.
          Currently, Python and JavaScript are the programming languages that I feel the most confident using but I also have
          experience with others such as Java, C, C++ and VBA. I have also used React, NodeJS and MySQL in some
          of the projects I have completed.
        </p>
        <p className={`${homeStyles.paragraph}`}>
          Due to my desire to learn new skills and ability to focus, I am able to learn new things rapidly.
          Learning new skills and expanding on my understanding of programming is a daily practice and something I find very rewarding.
          Creativity comes naturally to me and I find coming up with new ideas and bringing them to life exciting.
          I am very persistent and believe that given enough time, overcoming any obstacle is inevitable.
          Additionally, my organisational skills are excellent and I am routinely reliable and timely.
        </p>
        <p className={`${homeStyles.paragraph}`}>
          I read frequently, which was the source of inspiration for the ‘Reading Log’ project that I worked on. Mostly I read
          non-fiction books on skill development and autobiographies. As well as reading, I often listen to podcasts
          about science and technology when doing chores. Cooking is a passion of mine and I prepare dinner for my family most days.
        </p>
        <p className={`${homeStyles.paragraph}`}>
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
