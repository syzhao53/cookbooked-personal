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
  return (
     <div>Helllo{recipe.recipe}</div>
  )
}