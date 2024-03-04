import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
    console.log(error);
    return (
    <div>
      <h1>OOPS!!! Something wrong happened...</h1>
      <h3>{error.status}: {error.statusText}</h3>
    </div>
  )
}
