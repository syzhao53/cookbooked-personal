const background = (category) => {
  switch (category) {
    case 'veggies':
      return 'bg-green-100 text-green-400'
    case 'chicken':
      return 'bg-orange-100 text-orange-400'
    case 'beef':
      return 'bg-rose-100 text-rose-400'
    case 'pork':
      return 'bg-pink-100 text-pink-400'
    case 'tofu':
      return 'bg-amber-100 text-amber-400'
    case 'dessert':
      return 'bg-violet-100 text-violet-400'
    case 'spicy':
      return 'bg-red-100 text-red-400'
    case 'soup':
      return 'bg-yellow-100 text-yellow-400'
    case 'seafood':
      return 'bg-blue-100 text-blue-400'
    default:
      return 'bg-slate-200 text-slate-400'
  }
}

export const Tag = ({ category, children }) => {
    return (
      <span
        className={`inline-block ${background(category)} rounded-md px-3 py-1 text-sm`}
      >
        {children}
      </span>
    )
  }

  // add margin conditional render