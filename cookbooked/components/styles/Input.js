const textSize = (text) => {
    switch (text) {
      case 'large':
        return 'text-3xl lg:text-4xl'
      case 'medium':
          return 'text-3xl lg:text-4xl'
      case 'base':
          return 'text-base font-normal'  
    }
}

export const Input = ({ prop, setProp, defaultText, textType }) => {
    return (
        <input type="text" value={prop}
            onChange={(e) => {setProp(e.target.value)}}
            onFocus={() => {prop == defaultText && setProp('')}}
            onBlur={() => {prop == '' && setProp(defaultText)}}
            className={`${prop !== defaultText ? 'text-black' : 'text-med_gray'} 
            ${textSize(textType)}
            border-0 focus:outline-none font-medium w-full`}
        />
    )
  }