// import { Checkbox } from './Checkbox'
// import { Heading, SubHeading, IngredientSubtext } from './styles/Text'
// // import { IngredientInfo } from '@/components/styles/IngredientInfo'
// // import Ingredients from '@/components/Accordion'
// import { ClockIcon } from '@primer/octicons-react'
import NavBar from '../components/NavBar'
import EditingSidebar from '../components/EditingSidebar'
import EditIntro from '../components/EditIntro'
import EditBody from '../components/EditBody'
import { useState } from 'react'


const CreateRecipe = ({section, recipe, ingreds, steps, timers, servMult}) => {
//   const [ingredients, servingSelected, changeServing, getIngredient] =
//     useIngredient()
//   const servingOptions = [
//     { multiplier: 0.5, display: '1/2' },
//     { multiplier: 1, display: 'Original' },
//     { multiplier: 2, display: 'x2' },
//     { multiplier: 3, display: 'x3' },
//   ]
  const [title, setTitle] = useState('Recipe Title')
  const [editingSection, setEditingSection] = useState(0)

  const defaultDescrip = 'Write a description here for your recipe'
  const defaultNotes = 'Add some tips or reminders here'

  const [descrip, setDescrip] = useState(defaultDescrip)
  const [notes, setNotes] = useState(defaultNotes)
  const [sections, setSections] = useState([title])

  const createSections = () => {

  }


  return (
    <>
      <NavBar />
      <div className="flex min-h-[calc(100vh-64px)]">
        <EditingSidebar sections={sections} setSections={setSections} descrip={descrip} 
        editingSection={editingSection} setEditingSection={setEditingSection} title={title} setTitle={setTitle}/>

        <div className="w-screen lg:w-4/5 mt-10 px-8 lg:px-16 lg:ml-[20%]">
          {editingSection == 0 ? <EditIntro
          descrip={descrip} setDescrip={setDescrip} 
          notes={notes} setNotes={setNotes} title={title} setTitle={setTitle} /> 
          : <EditBody sections={sections} setSections={setSections} editingSection={editingSection} />}
        </div>
      </div>
    </>
  )
}

export default CreateRecipe