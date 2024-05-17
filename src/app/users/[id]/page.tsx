import React from 'react'

const IdPage = ({
  params
}: {
  params: {
    id: string
  }
}) => {
  return <div>User Id {params.id}</div>
}

export default IdPage
