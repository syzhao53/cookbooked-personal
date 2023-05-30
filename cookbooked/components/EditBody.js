import { Checkbox } from './Checkbox'
import { Heading, SubHeading } from './styles/Text'
import { Tag } from './styles/Tag'
import { Input } from './styles/Input'
import { useState } from 'react'
import Select from 'react-select'
// import clientPromise from '../lib/mongodb'



const EditBody = ({sections, setSections, editingSection}) => {
  const defaultTitle = 'Recipe Title'
  const defaultDescrip = 'Write a description here for your recipe'
  const defaultNotes = 'Add some tips or reminders here'

  const testPost = async () => {
    // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/createRecipe'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // Body of the request is the JSON data we created above.
      body: "hi this is the body",
      encodeBodyAsJSON: true
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
  }

  return (
<>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center mb-6">
          {/* <button onClick={() => testPost()} className="bg-rose-300">
            TEST BUTTON
          </button> */}
          <Input idx={editingSection} sections={sections} setSections={setSections}
          prop={sections[editingSection]} setProp={sections[editingSection]} defaultText={'Section ' + editingSection} textType="large"/>
        </div>
        {/* <div className="flex flex-row items-center text-base font-medium mb-6">
          Tags:
          <Select className="font-normal ml-2 w-1/3" options={tagOptions} isMulti/>
        </div> */}
        {/* <div className="mb-32">
          <SubHeading>Description</SubHeading>
          <Input prop={descrip} setProp={setDescrip} defaultText={defaultDescrip} textType="base"/>
        </div>
        <div className="mb-6">
          <SubHeading>Ingredients</SubHeading>
          ingredients
        </div>
        <div className="mb-6">
          <SubHeading>Notes</SubHeading>
          <Input prop={notes} setProp={setNotes} defaultText={defaultNotes} textType="base"/>
        </div> */}
      </div>
    </>
  )
}

export default EditBody