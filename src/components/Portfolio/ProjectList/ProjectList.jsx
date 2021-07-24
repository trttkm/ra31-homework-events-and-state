import PropTypes from 'prop-types';
import './ProjectList.css';

export function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(project => (
        <img
          className="project-list-item"
          src={project.img}
          alt={project.category}
          key={project.id}
        />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};
