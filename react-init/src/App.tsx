import React from 'react';
import './App.css';
import Typescript from './Typescript';
import Component from './components/Component';

function App() {
  return (
    <div>
      {
        mock.map(
          (item) => { return (<Component title={item.title} content={item.content} />) }
        )
      }
    </div>
  );
}

export default App;

const mock = [
  {
    title: '1 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '2 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '3 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
];