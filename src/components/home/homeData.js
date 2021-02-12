import { Link } from 'react-router-dom';

const link = <Link to='/projects' style={{ color: 'orange' }}>projects page</Link>;


const paragraphs = [
    `Welcome to my website; built using the React web framework. The entire website, including the UI components you see were created and styled from scratch, by me.`,
    `Feel free to expore some of the awesome projects I have completed on the ${link}.`,
    ``
];

export default paragraphs;
