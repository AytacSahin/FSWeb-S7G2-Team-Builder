import React, { useState } from 'react';
import '../src/Components/Form';
import Form from '../src/Components/Form'
import './App.css'

 

function App() {
  const [uyeler, setUyeler] = useState([
    { name: 'Selçuk İnan', email: 'selcuk.inan@gmail.com', role: 'Sağ Bek' },
    { name: 'Arda Turan', email: 'arda.turan@gmail.com', role: 'Forvet' },
  ]);

  const uyeEkle = (teamMember) => {
    setUyeler([...uyeler, teamMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
        {uyeler.map((item, index) => (
          <h2 key={index}>
            <h2>{item.name}</h2> ({item.role}) - {item.email}
          </h2>
        ))}
      <Form uyeEkle={uyeEkle}/>
    </div>
  );
}

export default App;