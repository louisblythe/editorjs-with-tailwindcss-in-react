import React from 'react'
import Editor from './Editor'

function App() {
  return (
    <div className="container">
      <header className="text-gray-500">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <section>
        <Editor />
      </section>
    </div>
  )
}

export default App
