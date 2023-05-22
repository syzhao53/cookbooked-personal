const background = (category) => {
  console.log("CAT: " + category)
  switch (category) {
    case 'veggies':
      return 'bg-green-100'
    case 'chicken':
      return 'bg-orange-100'
    case 'beef':
      return 'bg-rose-100'
    case 'pork':
      return 'bg-pink-100'
    case 'tofu':
      return 'bg-amber-100'
    case 'dessert':
      return 'bg-violet-100'
    case 'spicy':
      return 'bg-red-100'
    case 'soup':
      return 'bg-yellow-100'
    case 'seafood':
      return 'bg-blue-100'
    default:
      return 'bg-slate-200'
  }
}

export const Tag = ({ category, children }) => {
    return (
      <span
        className={`inline-block ${background(category)} rounded-full px-3 py-1 text-sm text-gray-700`}
      >
        {children}
      </span>
    )
  }

  // add margin conditional render