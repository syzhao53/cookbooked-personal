import { useState } from 'react'

export function useSection() {
  const [section, setSection] = useState('Section ')

  const sectionName = (newName) => {
    setSection(newName)
  }

  return [section, sectionName]
}
