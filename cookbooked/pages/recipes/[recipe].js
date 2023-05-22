import RecipeSidebar from '../../components/RecipeSidebar'
import RecipeIntro from '../../components/RecipeIntro'
import RecipeBody from '../../components/RecipeBody'
import NavBar from '../../components/NavBar'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useTimer } from '../../hooks/useTimer'
import { useEffect, useState } from 'react'
import clientPromise from '../../lib/mongodb'
import { sec } from 'mathjs'


export async function getServerSideProps(context) {
  const dataArr = JSON.parse(context.query.data); // parsed recipe data

  const client = await clientPromise;
  const db = client.db("data");
  const ingreds = await db
    .collection("ingredients")
    .find({recipe: dataArr.recipe})
    .limit(1)
    .toArray();

  const steps = await db
  .collection("steps")
  .find({recipe: dataArr.recipe})
  .limit(1)
  .toArray();

  const timers = await db
  .collection("timers")
  .find({recipe: dataArr.recipe})
  .limit(1)
  .toArray();

  return {
      // props: {
      //   recipe: context.query.id,
      //   data: context.query.data //pass it to the page props
      // }
      props: { recipe: dataArr, ingreds: JSON.parse(JSON.stringify(ingreds))[0],
        steps: JSON.parse(JSON.stringify(steps))[0], timers: JSON.parse(JSON.stringify(timers))[0] },
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

export default function Recipe({recipe, ingreds, timers, steps}){
  const [title, setTitle] = useState(recipe.recipe) // TODO: ACCOUNT FOR INTRO
  // const [section, setSection] = useLocalStorage('section', recipe.recipe) // TODO: ACCOUNT FOR INTRO
  const [section, setSection] = useState(recipe.recipe) // TODO: ACCOUNT FOR INTRO
  const [hasMounted, setHasMounted] = useState(false)
  const [servMult, setServMult] = useState(1);
  // const timer = useTimer()
  // const timer2 = useTimer()

  useEffect(() => {
    // prevent hydration error
    setHasMounted(true)
  }, [])

  const createTimers = (sectName) => {
    const sectionTimers = timers[sectName]

    // there are timers in the section
    if (typeof sectionTimers !== 'undefined') {
      let timerObj = []

      for (const [stepNum, timerInfo] of Object.entries(sectionTimers)) {
        timerObj[stepNum] = ({timer: useTimer(), name: timerInfo.name, time: timerInfo.time})
        // console.log("timer ingo====: " + timerInfo.time + " " + timerInfo.name)
        // console.log("timerArr length: " + timerArr.length)
      }

      return timerObj
    } else {
      return
    }
  }

  const sections = recipe.sections
  // ex: {Marinade: {stepNum: {timer, name, time}}}
  let allTimers = {} // store section timer arrays (key: section name, val: array of section timer objects)
  let timerHooks = []

  sections.map((section) => (
    allTimers[section] = createTimers(section)
  ))


  const displaySection = (section) => {
    if (section == recipe.recipe) {
      return <RecipeIntro recipe={recipe} ingreds={ingreds} steps={steps} servMult={servMult} setServMult={setServMult}/>
    } else {
      return <RecipeBody section={section} recipe={recipe} ingreds={ingreds} steps={steps} timers={allTimers[section]} servMult={servMult}/>
    }
  }

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
            allTimers={allTimers}
          />
          <div className="w-4/5 mt-10 px-16" style={{ marginLeft: '20%' }}>
            {displaySection(section)}
            {/* BODY HERE */}
            {/* {JSON.stringify(ingreds)} */}
            {/* {JSON.stringify(steps)}
            {JSON.stringify(timers)} */}
            {/* <RecipeBody /> */}
          </div>
        </div>
      )}
    </div>
  )
}