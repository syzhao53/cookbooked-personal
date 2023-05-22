// import { Checkbox } from './Checkbox'
// import { Heading, SubHeading, IngredientSubtext } from './styles/Text'
// // import { IngredientInfo } from '@/components/styles/IngredientInfo'
// // import Ingredients from '@/components/Accordion'
// import { ClockIcon } from '@primer/octicons-react'
import NavBar from '../components/NavBar'
import EditingSidebar from '../components/EditingSidebar'
import EditIntro from '../components/EditIntro'


const CreateRecipe = ({section, recipe, ingreds, steps, timers, servMult}) => {
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
      <NavBar />
      <div className="flex min-h-[calc(100vh-64px)]">
        <EditingSidebar />

        <div className="w-screen lg:w-4/5 mt-10 px-8 lg:px-16 lg:ml-[20%]">
          <EditIntro />
        </div>
      </div>
    </>
  )
}

export default CreateRecipe