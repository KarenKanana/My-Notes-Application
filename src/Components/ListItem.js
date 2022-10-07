import React from 'react'

let getTime = (mynote) => {
    return new Date(mynote.updated).toLocaleDateString()
}

//split by new lines and get the first line

let getTitle = (mynote) => {
    const title = mynote.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

let getContent = (mynote) => {
    
    //Get content after title

    let title = getTitle(mynote)
    let content = mynote.body.replaceAll('\n', '')
    content = content.replaceAll(title, '')

    //Slice content and add three dots in over 45 characters to show there is more
    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }

}



