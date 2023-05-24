import { Checkbox } from './Checkbox'
import { Heading, SubHeading } from './styles/Text'
import { Tag } from './styles/Tag'
import { Input } from './styles/Input'
import { useState } from 'react'
import Select from 'react-select'
// import clientPromise from '../lib/mongodb'



const EditIntro = ({title, setTitle}) => {
  const [tags, setTags] = useState([])
  const [recipeInfo, setRecipeInfo] = useState({title: title})
  const defaultTitle = 'Recipe Title'
  const tagOptions = [
    { value: 'chicken', label: 'chicken' },
    { value: 'beef', label: 'beef' },
    { value: 'pork', label: 'pork' },
    { value: 'veggies', label: 'veggies' },
    { value: 'tofu', label: 'tofu' },
    { value: 'pork', label: 'pork' },
    { value: 'dessert', label: 'dessert' },
    { value: 'spicy', label: 'spicy' },
    { value: 'seafood', label: 'seafood' }
  ]

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
          <Input prop={title} setProp={setTitle} defaultText={defaultTitle} textType="large"/>
          {/* <input type="text" id="search" name="title" value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                onFocus={() => {title == defaultTitle && setTitle('')}}
                onBlur={() => {title == '' && setTitle(defaultTitle)}}
            className={`${title !== defaultTitle ? 'text-black' : 'text-med_gray'} border-0 focus:outline-none text-3xl lg:text-4xl font-medium`}/> */}
        </div>
        <div className="flex flex-row items-center text-base font-medium">
          Tags:
          <Select className="font-normal ml-2 w-1/3" options={tagOptions} isMulti/>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default EditIntro