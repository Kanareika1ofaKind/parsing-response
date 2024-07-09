import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    async function getCats() {
      try {
        const res = await fetch('http://localhost:3003/api/cats')
      if (!res.ok) {
          throw new Error(`Ugh, we got a ${res.status}`)
        }
        const data = await res.json()
        console.log(data);
      } catch (error) {
        console.log('Error GETing cats', error)
      } 
      // BELOW fetch version of the code, ABOVE async/await version
      // fetch('http://localhost:3003/api/cats')
      // .then(res => {
      //   if (!res.ok) {
      //     throw new Error(`Ugh, we got a ${res.status}`)
      //   }
      //   // Where is my JSON??
      //   return res.json()
      // })
      // .then(data => {
      //   // Here is the JSON
      //   console.log(data);  // res.blob() res.text()
      // })
      // .catch(error => {
      //   console.log('Error GETing cats', error);
      // })
    }
    getCats()
  }, [])
  return (
    <div>
      <h2>Hello, Cats!</h2>
    </div>
  )
}
