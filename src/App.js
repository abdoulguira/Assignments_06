import React from 'react'
import Header from './components/Header';
import Filter from "./components/Filter";
import ZipInput from "./components/ZipInput";


export default function App() {
  return (
      <div>
          <Header text="Zip Code Search"></Header>
          <Filter />
          <ZipInput></ZipInput>
      </div>
  );
}


