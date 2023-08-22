import React from 'react'
import Header from '../../layout/Header'
import Footer from 'layout/Footer';
import { Link } from 'react-router-dom';

interface Props {
  setPage: React.Dispatch<React.SetStateAction<"sub" | "main">>
}

export default function Main({ setPage }: Props) {

  const onClickHandler = () => {
    for (let index = 0; index < 1000000; index++) console.log(index);
  }

  return (
    <div style={{ height: '600px', backgroundColor: 'rgba(255, 0, 255, 0.5)' }}>
      <Link to='/sub' onClick={onClickHandler}>Sub</Link>
    </div>
  )
}
