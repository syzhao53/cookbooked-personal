import { Checkbox } from './Checkbox'
import { Heading, SubHeading } from './styles/Text'
import { Tag } from './styles/Tag'
import { useState } from 'react'
// import clientPromise from '../lib/mongodb'



const EditIntro = ({duration, recipe, ingreds, servMult, setServMult}) => {
  const [title, setTitle] = useState('Recipe Title')

  const [recipeInfo, setRecipeInfo] = useState({title: title})

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
      <div className="flex justify-between">
        <div className="flex flex-row items-center">
          <button onClick={() => testPost()} className="bg-rose-300">
            TEST BUTTON
          </button>
            <input type="text" id="search" name="title" value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                onFocus={() => {setTitle('')}}
                // onBlur={() => {'hellooooo'}}
            className="border-0 focus:outline-none text-3xl lg:text-4xl font-medium text-med_gray"/>
        </div>
      </div>
    </>
  )
}

export default EditIntro