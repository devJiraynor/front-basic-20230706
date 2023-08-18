import React from 'react'

interface Props {
  title: string;
  content: string;
}

export default function Component({ title, content }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
