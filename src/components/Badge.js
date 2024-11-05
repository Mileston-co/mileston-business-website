import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Badge({ icon, children }) {
  return (
    <div className='bg-green-200 text-green-500 rounded inline-flex items-center px-2 py-1 gap-3'><FontAwesomeIcon icon={ icon } /> { children }</div>
  )
}

export default Badge