import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';

function HomePage() {
  const [avoList, setAvoList] = useState([]);

  useEffect(() => {
    fetch('api/avo')
      .then((response) => response.json())
      .then(({data, lenght}) => setAvoList(data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Hola Avocato!</h1>
      {avoList && avoList.map((avo) => <div key={avo.id}>{avo.name}</div>)}
    </>
  );
}

export default HomePage;
