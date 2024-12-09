import React, { ReactNode } from 'react'
import "./ErrorMessage.css"

function ErrorMessage({children} : {children: ReactNode}) {
  return (
    <p>{children}</p>
  )
}

export default ErrorMessage