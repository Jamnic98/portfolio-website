import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../appData';
import psStyles from './ProjectShowcase.module.css'


const ProjectShowcase = (props) => {

  const projectID = props.match.params.projectID;
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    setProjectData({ ...getProjectData()[0] });
  }, [projectID])

  const getProjectData = () => {
    return projects.filter((project) => {
      return project.id === projectID;
    })
  }

  const setProjectLink = (projectLink) => {
    if (projectLink === null) {
      return null;
    } else {
      return (<a className={`${psStyles.link}`} href={projectLink} target='_blank'>Project Link</a>);
    }
  }

  const setLongDescription = (longDescription) => {
    return longDescription.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  }

  const setImages = (images) => {
    return images.map((img, index) => {
      return (
        <div className={`${psStyles.imgContainer}`}>
          {/* <div className={`${psStyles.colorOverlay}`}></div> */}
          <img src={img} className={`${psStyles.img}`} key={index} />
        </div>
      );
    }).reverse();
  }

  const setOutput = () => {

    if (projectData === null) {
      return null;
    } else {
      return (
        <section className='page-contents'>
          <header className={`${psStyles.header}`} >
            <h1>{projectData.title}</h1>
            <p>{projectData.shortDescription}</p>
          </header>
          <div>{setProjectLink(projectData.projectLink)}</div>
          <div className={`${psStyles.imgsContainer}`}>
            {setImages(projectData.screenshots)}
          </div>
          <div className={`${psStyles.longDescription}`}>{setLongDescription(projectData.longDescription)}</div>
          <a className={`${psStyles.link}`} href={projectData.ghLink} target='_blank'>GitHub Link</a>
          <br />
          <br />
          <Link to='/projects' className={`${psStyles.link}`}>&larr; Projects Overview</Link>
        </section >
      );
    }
  }

  return setOutput();
}

export default ProjectShowcase;
