import TextareaAutosize from 'react-textarea-autosize';

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

const updateSectionName = (text, sections, setSections, idx) => {
    let copySections = sections.slice()
    copySections[idx] = text

    // copySections.splice(idx, 0, text)
    // copySections.push(secProp)

    setSections(copySections)
}

const blurHandler = (prop, sections, setSections, setProp, defaultText, idx) => {
    if (prop == '') {
      if (sections == undefined) {
        setProp(defaultText)

        return
      } else {
        updateSectionName(defaultText, sections, setSections, idx)
      }
    }

    return 
}

export const Input = ({ idx, sections, setSections, prop, setProp, defaultText, textType }) => {
    return (
        <TextareaAutosize minRows={1} type="text" value={prop}
            onChange={(e) => {sections == undefined ? setProp(e.target.value)
                : updateSectionName(e.target.value, sections, setSections, idx)}}
            onFocus={() => {prop == defaultText && sections == undefined ? setProp('')
                : updateSectionName('', sections, setSections, idx)}}
            onBlur={() => {blurHandler(prop, sections, setSections, setProp, defaultText, idx)}}
            className={`${prop !== defaultText ? 'text-black' : 'text-med_gray'} 
            ${textSize(textType)}
            border-0 focus:outline-none font-medium w-full resize-none overflow-visible bg-bg_white`}
        />
    )
  }