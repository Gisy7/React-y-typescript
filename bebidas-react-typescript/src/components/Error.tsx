import React, { ReactNode } from 'react'

function ShowError({children} : {children: ReactNode}) {
  return (
    <p className='text-white font-bold '>{children}</p>
  )
}

export default ShowError