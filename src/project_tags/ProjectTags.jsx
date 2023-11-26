import React, { useState } from 'react'
import TagButton from '../tag_button/TagButton';

const ProjectTags = ({tags, onFilterTags}) => {
    const [activeTag, setActiveTag] = useState('');

    const changeTagHandler = (activeTag) => {
        setActiveTag(activeTag);
        onFilterTags(activeTag);
    }

  return (
    <div className='portfolio__categories' style={{marginTop:"2rem"}}>
        {
            tags.map(tag => (
                <TagButton key={tag} tag={tag} onChangeTag={() => changeTagHandler(tag)} className={`btn cat__btn ${activeTag === tag ? 'primary' : 'white'}`}/>
            ))
        }
    </div>
  )
}
export default ProjectTags