import React, { useEffect, useState } from 'react';



const App = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const { users } = backendData

  return (
    <div>
      <h1>Привет всем!</h1>

      {(typeof users === 'undefined')
        ? (<p>Loading...</p>)
        : (users.map((user, i) => (
          <p key={i}>{user}</p>))
        )}

    </div>
  );
}

export default App;