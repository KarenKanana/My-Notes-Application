import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon} from '../Assets/add.svg'

function AddButton() {
    return (
      <Link to='/note/new' className='bottom-btn'>
         <AddIcon />
      </Link>
  
  
      )
  }
  
  export default AddButton;