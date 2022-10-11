import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (mynote) => {
    return new Date(mynote.updated).toLocaleDateString()
}


let getTitle = (mynote) => {
    const title = mynote.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

let getContent = (mynote) => {
    
   

    let title = getTitle(mynote)
    let content = mynote.body.replaceAll('\n', '')
    content = content.replaceAll(title, '')

    
    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }

}

const ListItem = ({ mynote }) => {
    return (
        <Link to={`/note/${mynote.id}`}>
            <div className="my-notes">
                <h3>{getTitle(mynote)}</h3>
                <p><span>{getTime(mynote)}</span></p>
            </div>
        </Link>
    )
}

export default ListItem;

