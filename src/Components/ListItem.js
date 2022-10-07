import React from 'react'

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

