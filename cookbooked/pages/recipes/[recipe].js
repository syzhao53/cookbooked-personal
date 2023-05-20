import RecipeSidebar from '../../components/RecipeSidebar'
import RecipeBody from '../../components/RecipeBody'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect, useState } from 'react'

export const getServerSideProps= (context)=> {
    console.log("QUERY RESTUL HAHAHHAH===========: " + context.query.id) 
    console.log("DATA: " + context.query.data)
    return {
        // props: {
        //   recipe: context.query.id,
        //   data: context.query.data //pass it to the page props
        // }
        props: { recipe: JSON.parse(context.query.data) },
    }
  }

export default function Recipe({recipe}){
  const [section, setSection] = useLocalStorage('section', recipe.sections[0]) // TODO: ACCOUNT FOR INTRO
  const [hasMounted, setHasMounted] = useState(false)
  // const timer = useTimer()
  // const timer2 = useTimer()

  useEffect(() => {
    // prevent hydration error
    setHasMounted(true)
  }, [])

  // TODO: QUERY ALL OTHER COLLECTIONS FOR FULL RECIPE INFO

  return (
    <div>
      <div>Helllo{recipe.recipe}</div>
      {hasMounted && (
        <div className="flex min-h-[calc(100vh-64px)]">
          <RecipeSidebar
            section={section}
            setSection={setSection}
            allSections={recipe.sections}
            // sectionTimes={TIMES}
            // allTimers={timer}
          />
          <div className="w-4/5 mt-10 px-16" style={{ marginLeft: '20%' }}>
            {/* {displaySection(section)} */}
            BODY HERE
          </div>
        </div>
      )}
    </div>
  )
}