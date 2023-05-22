import { Checkbox } from './Checkbox'
import { Heading, SubHeading, IngredientSubtext } from './styles/Text'
// import { IngredientInfo } from '@/components/styles/IngredientInfo'
// import Ingredients from '@/components/Accordion'
import { ClockIcon } from '@primer/octicons-react'

const RecipeBody = ({section, recipe, ingreds, steps, timers, servMult}) => {
//   const [ingredients, servingSelected, changeServing, getIngredient] =
//     useIngredient()
//   const servingOptions = [
//     { multiplier: 0.5, display: '1/2' },
//     { multiplier: 1, display: 'Original' },
//     { multiplier: 2, display: 'x2' },
//     { multiplier: 3, display: 'x3' },
//   ]

  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>{section}</Heading>
        <button className="bg-sage_green hover:bg-white hover:text-sage_green border-2 border-sage_green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <div className="w-3/4">
          <div className="mb-4">
            <span className="font-medium pr-2">Duration:</span>
            <span>40 min</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-3/4">
            <SubHeading>Steps</SubHeading>
            <div style={{ overflow: 'visible' }}>
                {steps[section].map((step, idx) => (
                    <div>
                        <Checkbox step>
                            <div className="flex flex-row">
                                <span>{idx + 1 + "."}&nbsp;</span>
                                <span>
                                    {step}
                                </span>
                            </div>
                        </Checkbox>
                        <IngredientSubtext time={timers !== undefined  && timers[idx + 1] !== undefined 
                        ? true : ''} ingredientsList={ingreds[section][idx]} quants={ingreds.quantities} units={ingreds.units} mult={servMult}/>
                        <div className="m-4" />

                        <div>{timers !== undefined  && timers[idx + 1] !== undefined 
                        ? !timers[idx + 1].timer[2] ? (
                          <button
                            className="bg-white hover:bg-sage_green hover:text-white border-2 border-sage_green text-sage_green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                            style={{ width: 'fit-content' }}
                            onClick={() => timers[idx + 1].timer[1](timers[idx + 1].time, timers[idx + 1].name)}
                          >
                            <ClockIcon size={16} className="mr-2" />
                            Start Timer
                          </button>
                        ) : (
                          timers[idx + 1].timer[0]
                        )
                        : ''}</div>
                        {/* {!hasStarted ? (
                          <button
                            className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                            style={{ width: 'fit-content' }}
                            onClick={() => startTimer(3000, 'Baking')}
                          >
                            <ClockIcon size={16} className="mr-2" />
                            Start Timer
                          </button>
                        ) : (
                          DoughTimer
                        )} */}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeBody