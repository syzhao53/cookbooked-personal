import RecipeSidebar from '../../components/RecipeSidebar'
import RecipeBody from '../../components/RecipeBody'
import NavBar from '../../components/NavBar'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect, useState } from 'react'


export async function getServerSideProps(context) {
  // console.log("QUERY RESTUL HAHAHHAH===========: " + context.query.id) 
  // console.log("DATA: " + context.query.data)

  // const client = await clientPromise;
  //       const db = client.db("data"); // USE SAME CONNECTION HOW?
  
  //       const ingreds = await db
  //             .collection("ingredients")
  //             .find({}) // recipe: ??? how to get title
  //             .limit(1000)
  //             .toArray();
  
  return {
      // props: {
      //   recipe: context.query.id,
      //   data: context.query.data //pass it to the page props
      // }
      props: { recipe: JSON.parse(context.query.data) },
  }
}

// WORKS
// export const getServerSideProps= (context)=> {
//     // console.log("QUERY RESTUL HAHAHHAH===========: " + context.query.id) 
//     // console.log("DATA: " + context.query.data)
//     return {
//         // props: {
//         //   recipe: context.query.id,
//         //   data: context.query.data //pass it to the page props
//         // }
//         props: { recipe: JSON.parse(context.query.data) },
//     }
//   }

// export async function getStaticProps(context) {
//   try {
//       const client = await clientPromise;
//       const db = client.db("data"); // USE SAME CONNECTION HOW?

//       const ingreds = await db
//             .collection("ingredients")
//             .find({}) // recipe: ??? how to get title
//             .limit(1000)
//             .toArray();

//       return {
//           props: { ingreds: JSON.parse(JSON.stringify(ingreds)) },
//       };
//   } catch (e) {
//       console.error(e);
//   }
// }

export default function Recipe({recipe}){
  const [title, setTitle] = useState(recipe.recipe) // TODO: ACCOUNT FOR INTRO
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
      <NavBar />
      {hasMounted && (
        <div className="flex min-h-[calc(100vh-64px)]">
          <RecipeSidebar
            title={recipe.recipe}
            section={section}
            setSection={setSection}
            allSections={recipe.sections}
            // sectionTimes={TIMES}
            // allTimers={timer}
          />
          <div className="w-4/5 mt-10 px-16" style={{ marginLeft: '20%' }}>
            {/* {displaySection(section)} */}
            BODY HERE
            {/* <RecipeBody /> */}
          </div>
        </div>
      )}
    </div>
  )
}