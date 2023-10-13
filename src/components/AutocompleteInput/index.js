import React, { useState, useEffect } from 'react'

const AutocompleteInput = ({ suggestions }) => {
  const [input, setInput] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  useEffect(() => {
    setFilteredSuggestions(
      suggestions.filter((s) => s.includes(input))
    )
  }, [input, suggestions])
  
  return (
    <div>
      <input
        data-testid="autocomplete-input" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <ul
        data-testid="autocomplete-list" 
      >
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  )
}

export default AutocompleteInput