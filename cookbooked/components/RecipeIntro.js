import { Checkbox } from './Checkbox'
import { Heading, SubHeading } from './styles/Text'
import { Tag } from './styles/Tag'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {fraction, format} from 'mathjs'
import { useIngredient } from '../hooks/useIngredient'

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
        <Heading>{recipe.recipe}</Heading>
        <button className="bg-sage_green hover:bg-white hover:text-sage_green border-2 border-sage_green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="mt-4 mb-4">
        {recipe.tags.map((tag) => (
            <Tag category={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div className="mr-6">
            <span className="font-medium pr-2">Duration:</span>
            <span>
              {
                duration.total.hours > 0
                ? duration.total.hours + " hr " + duration.total.minutes
                : duration.total.minutes + " min"
              }
            </span>
          </div>
          <div className="mt-4">
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
          <div className="mt-4">
            {recipe.description}
          </div>
        </div>
        {/* <img className="rounded-md" src="/apple-pie.png" alt="Apple pie" /> */}
      </div>
      <div className="mt-4">
        <SubHeading>All Ingredients</SubHeading>
        <div className="w-3/4 gap-2 grid grid-cols-2 grid-rows-4">
          {ingreds.ingredients.map((ingred) => (
            <Checkbox key={ingred}>
                {formatIngred(servMult, ingreds.quantities[ingred], ingreds.units[ingred], ingred)}
                {/* {ingreds.quantities[ingred] + " " + ingreds.units[ingred] + " " + ingred} */}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <SubHeading>Notes</SubHeading>
        <span>
          Use cold butter and ice water. Need to bring pie plate and fruit
          peeler.
        </span>
      </div>
    </>
  )
}

export default RecipeIntro