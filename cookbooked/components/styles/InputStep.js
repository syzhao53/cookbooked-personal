import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react'
import { ClockIcon, LawIcon } from '@primer/octicons-react'

let numbered = false

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

const blurHandler = (prop, newSteps, setNewSteps, setProp, defaultText, idx) => {
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

const numberStep = (prop, idx) => {
    numbered = true

    return (idx + 1) + ". " + prop
}

// value={!numbered ? numberStep(prop) : prop}

export const InputStep = ({ newSteps, setNewSteps, prop, defaultText, idx}) => {
    const [toolbar, setToolbar] = useState(false)

    const toggleToolbar = () => {
      setToolbar(!toolbar)
    }

    return (
        <div className="flex flex-row items-center">
            <div className={`${toolbar ? 'flex flex-col justify-center' : 'hidden'} px-4 
            py-2 drop-shadow-sm bg-bg_white mr-2`}>
              <ClockIcon size={16} className="mb-4" />
              {/* <LawIcon size={16} /> */}
              <img src="/carrot-icon.svg" className="w-6"/>
            </div>
            <TextareaAutosize minRows={1} type="text" value={prop}
              onChange={(e) => {updateStep(e.target.value, newSteps, setNewSteps, idx)}}
              onFocus={() => {prop == defaultText && updateStep('', newSteps, setNewSteps, idx)}}
              onBlur={() => {prop == '' && updateStep(defaultText, newSteps, setNewSteps, idx)}}
              onMouseOver={() => toggleToolbar()}
              onMouseOut={() => toggleToolbar()}
              className={`${prop !== defaultText ? 'text-black' : 'text-med_gray'} 
              text-base font-normal  
              border-0 focus:outline-none font-medium w-full resize-none overflow-visible bg-bg_white`}
            />
          </div>
    )
  }

  // how would you know what step/line you're in when you click to edit a step?
  // should probably just handle it via parsing the whole block of text after to split into steps
  // basically take in the whole thing as a string??? doesn't make sense, you need to attach timers and ingredients
  // check how the data was laid out
  // probably have to do what was done with the sections in the sidebar, just ad a new textarea on enter