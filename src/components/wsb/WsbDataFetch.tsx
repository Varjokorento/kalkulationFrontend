import React, { useEffect, useState } from 'react';

export default function WsbDataFetch() {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('effected')
      }, []);
  // Declare a new state variable, which we'll call "count"

  const DataList = () => {
      return <p></p>
  }
  return (
    <div>
        <DataList/>
    </div>
  );
}