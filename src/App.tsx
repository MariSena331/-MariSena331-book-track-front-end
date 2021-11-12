import React, { useEffect, useState, useCallback } from 'react'
import { api } from './services/api'
import { GlobalStyles } from './styles/global'

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
        {
            books && books.map((item: any) => (
                <>
                    <a key={item.id}>{item.title}</a><br />
                </>
            ))
        }
    </>
  )
}

export default App;
