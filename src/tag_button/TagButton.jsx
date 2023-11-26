import React from 'react'

const TagButton = ({tag, className, onChangeTag}) => {
  return (
    <button className={className} onClick={() => onChangeTag(tag)}>{tag}</button>
  )
}

export default TagButton