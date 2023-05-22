import { Checkbox } from './Checkbox'
import { Heading, SubHeading } from './styles/Text'
import { Tag } from './styles/Tag'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {fraction, format} from 'mathjs'
import { useIngredient } from '../hooks/useIngredient'
import Image from 'next/image'


const RecipeIntro = ({duration, recipe, ingreds, servMult, setServMult}) => {
  const [formatIngred] = useIngredient()

  const servingOptions = [
    { multiplier: 0.5, display: '1/2' },
    { multiplier: 1, display: 'Original' },
    { multiplier: 2, display: 'x2' },
    { multiplier: 3, display: 'x3' },
  ]

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row items-center">
          <Heading>{recipe.recipe}</Heading>
          <img
            className="w-8 h-8 ml-3"
            src="/lemon-chicken.png"
            alt="tikka masala icon"
          />
        </div>

        <button className="hidden md:block bg-sage_green hover:bg-white hover:text-sage_green border-2 border-sage_green text-white text-sm py-1 px-4 md:py-2 md:px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="flex">
        <div className="w-screen md:w-3/4">
          <div className="flex flex-col md:flex-row md:items-center mt-4">
            <div className="mb-2 md:mb-0 md:mr-6">
              <span className="font-medium pr-2">Duration:</span>
              <span>
                {
                  duration.total.hours > 0
                  ? duration.total.hours + " hr " + duration.total.minutes
                  : duration.total.minutes + " min"
                }
              </span>
            </div>
            <div className="">
              <span className="font-medium pr-2">Servings:</span>
              {servingOptions.map((serving) => (
                <button
                  key={serving.display}
                  className={`${
                    serving.multiplier === servMult
                      ? ''
                      : 'hover:text-gray'
                  } relative rounded-md px-2.5 py-1 transition`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  onClick={() => setServMult(serving.multiplier)}
                >
                  {serving.multiplier === servMult && (
                    <motion.span
                      layoutId="bubble"
                      className="rounded-md absolute z-10 inset-0 bg-light_purple mix-blend-multiply"
                      transition={{
                        type: 'spring',
                        bounce: 0.1,
                        duration: 0.5,
                      }}
                    />
                  )}
                  {/* {serving.display == '1/2' ? <div><sup>1</sup>&frasl;<sub>2</sub></div> : serving.display} */}
                  {serving.display}
                </button>
              ))}
            </div>
          </div>
          <div className="my-2 md:mt-4 md:mb-4">
            {recipe.tags.map((tag) => (
                <Tag category={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="mt-4 mb-10">
            {recipe.description}
          </div>
        </div>
        {/* <img className="rounded-md" src="/apple-pie.png" alt="Apple pie" /> */}
      </div>
      <div className="mb-5">
        <SubHeading>All Ingredients</SubHeading>
        <div className="md:w-3/4 md:gap-2 md:grid md:grid-cols-2 md:grid-rows-4">
          {ingreds.ingredients.map((ingred) => (
            <Checkbox key={ingred}>
                {formatIngred(servMult, ingreds.quantities[ingred], ingreds.units[ingred], ingred)}
                {/* {ingreds.quantities[ingred] + " " + ingreds.units[ingred] + " " + ingred} */}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="mt-10 md:mt-0 mb-10">
        <SubHeading>Notes</SubHeading>
        <span>
          {recipe.notes[recipe.recipe]}
        </span>
      </div>
    </>
  )
}

export default RecipeIntro