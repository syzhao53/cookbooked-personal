import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import { useState } from 'react'

import { Heading } from '../components/styles/Text'
import { Tag } from '../components/styles/Tag'
// import { TagTwoTone } from '@mui/icons-material'


const kebabCase = str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();

export async function getStaticProps(context) {
  try {
      const client = await clientPromise;
      const db = client.db("data");

      const recipes = await db
            .collection("library")
            .find({})
            .limit(1000)
            .toArray();

      return {
          props: { recipes: JSON.parse(JSON.stringify(recipes)) },
      };
  } catch (e) {
      console.error(e);
  }
  // try {
  //   await clientPromise
  //   // `await clientPromise` will use the default database passed in the MONGODB_URI
  //   // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
  //   //
  //   // `const client = await clientPromise`
  //   // `const db = client.db("myDatabase")`
  //   //
  //   // Then you can execute queries against your database like so:
  //   // db.find({}) or any of the MongoDB Node Driver commands

  //   return {
  //     props: { isConnected: true },
  //   }
  // } catch (e) {
  //   console.error(e)
  //   return {
  //     props: { isConnected: false },
  //   }
  // }
}

// const math = create(all,  {})

export default function Home({recipes}){
  const [page, setPage] = useState('library')

  return (
    <div>
        <NavBar page={page} setPage={setPage}/>
        <div className="flex flex-col items-center h-screen mx-auto mt-8">
        <div className="flex flex-col text-center items-center mt-36 w-5/6 md:w-screen">
        <div className="flex">
            {/* <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="CookBooked chefs hat logo"
              className="mr-2"
            /> */}
            <Heading>My CookBook</Heading>
            {/* <div>{" + " + format(fraction(.5))}</div> */}
          </div>
          <form>
            <input type="text" id="search" name="search" className="flex border-2 border-med_gray rounded-full my-8 w-80 h-10"/>
          </form>
          <div>[filter + sort]</div>
          {/* <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-4 rounded-full float-right">
            Create New Recipe
          </button> */}
          {/* <div className="flex my-2">
            <div className="flex mr-4 border-b-2 border-green">
              <img className="w-3.5" src="/filter-icon.svg" alt="Filter icon" />
              <span className="text pl-1 text-green">Filter</span>
            </div>
            <div className="flex border-b-2 border-green">
              <img className="w-3.5" src="/sort-icon.svg" alt="Sort icon" />
              <span className="text pl-1 text-green">Sort</span>
            </div>
          </div> */}
        </div>
        {/* <Link href="/recipe/apple_pie" className="flex flex-col mt-32 w-7/12">
          <div className="flex items-center rounded-lg px-10 py-10 card-drop mb-6 bg-bg_white">
              <div className="flex flex-col">
                <div className="flex">
                  <span className="font-medium text-xl mr-2">Chicken Tikka Masala</span>
                  <Image
                    src="/tikka-masala.png"
                    alt="tikka masala icon"
                    width="28"
                    height="28"
                  />
                </div>
              
                <span className="text-gray-700 text-base">
                  1 hr 30 min
                </span>
              </div>
              <div className="ml-auto">
                <Tag background={'bg-purple'}>dessert</Tag>
                <Tag background={'bg-light_pink'}>baking</Tag>
              </div>
          </div>
        </Link> */}
        {recipes.map((recipe) => (
          <Link href={{
            pathname: "/recipes/[recipe]",
            query: {
                id: recipe.recipe,
                data: `${JSON.stringify(recipe)}`
            }
          }}
          as={`recipes/${kebabCase(recipe.recipe)}`}
          className="flex flex-col mt-32 md:w-7/12">
            <div className="flex items-center rounded-lg px-8 py-8 md:px-10 md:py-10 card-drop mb-6 bg-bg_white">
                <div className="flex flex-col">
                  <div className="flex mr-12">
                    <span className="font-medium text-lg md:text-xl mr-2">{recipe.recipe}</span>
                    <Image className="hidden md:block"
                      src="/lemon-chicken.png"
                      alt="tikka masala icon"
                      width="28"
                      height="28"
                    />
                    <Image className="md:hidden"
                      src="/lemon-chicken.png"
                      alt="tikka masala icon"
                      width="28"
                      height="28"
                    />
                  </div>
                
                  <span className="text-gray-700 text-sm md:text-base">
                      {
                      recipe.duration.total.hours > 0
                      ? recipe.duration.total.hours + " hr " + recipe.duration.total.minutes
                      : recipe.duration.total.minutes + " min"
                    }
                  </span>
                </div>
                <div className="ml-auto">
                  {recipe.tags.map((tag) => (
                    <Tag category={tag}>{tag}</Tag>
                  ))}
                  {/* <Tag background={'bg-purple'}>dessert</Tag>
                  <Tag background={'bg-light_pink'}>baking</Tag> */}
                </div>
            </div>
          </Link>
        ))}
      </div>
      <Head>
        <title>CookBooked</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* 
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        </main> */}
    </div>
  )
}
