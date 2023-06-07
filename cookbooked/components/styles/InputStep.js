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

const updateStep = (text, newSteps, setNewSteps, idx) => {
    let copySteps = newSteps.slice()
    copySteps[idx].text = text

    // copySections.splice(idx, 0, text)
    // copySections.push(secProp)

    setNewSteps(copySteps)
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

export const InputStep = ({ newSteps, setNewSteps, prop, defaultText, idx}) => {
    return (
        <TextareaAutosize minRows={1} type="text" value={prop}
            // onChange={(e) => {sections == undefined ? setProp(e.target.value)
            //     : updateSectionName(e.target.value, sections, setSections, idx)}}
            onFocus={() => {prop == defaultText && updateStep('', newSteps, setNewSteps, idx)}}
            // onBlur={() => {blurHandler(prop, sections, setSections, setProp, defaultText, idx)}}
            className={`${prop !== defaultText ? 'text-black' : 'text-med_gray'} 
            text-base font-normal  
            border-0 focus:outline-none font-medium w-full resize-none overflow-visible bg-bg_white`}
        />
    )
  }

  // how would you know what step/line you're in when you click to edit a step?
  // should probably just handle it via parsing the whole block of text after to split into steps
  // basically take in the whole thing as a string??? doesn't make sense, you need to attach timers and ingredients
  // check how the data was laid out
  // probably have to do what was done with the sections in the sidebar, just ad a new textarea on enter