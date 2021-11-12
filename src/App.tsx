import React, { useEffect, useState, useCallback } from 'react'
import { api } from './services/api'
import { GlobalStyles } from './styles/global'
import { MyBooks } from './components/MyBooks'

function App() {
    const [books, setBooks] = useState([])

    const handleGetBooks = useCallback(async() => {
        const result = await api.get("/books")

        setBooks(result.data)
    }, [books])

    useEffect(() => {
       handleGetBooks()
    }, [])

  return (
    <>
        <GlobalStyles />
        <MyBooks books={books} setBooks={setBooks} />
    </>
  )
}

export default App;
