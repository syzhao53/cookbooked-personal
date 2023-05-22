import { Checkbox } from './Checkbox'
import { Heading, SubHeading } from './styles/Text'
import { Tag } from './styles/Tag'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {fraction, format} from 'mathjs'
import { useIngredient } from '../hooks/useIngredient'
import Image from 'next/image'


const EditIntro = ({duration, recipe, ingreds, servMult, setServMult}) => {
  const [title, setTitle] = useState('Recipe Title')

  const [recipeInfo, setRecipeInfo] = useState({title: title})

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row items-center">
            <input type="text" id="search" name="title" value={title}
                onChange={(e) => {setTitle(e.target.value)}
            }
            className="border-0 text-3xl lg:text-4xl font-medium text-slate-400"/>
        </div>
      </div>
    </>
  )
}

export default EditIntro