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

const updateStep = (text, newSteps, setNewSteps, idx, editingSection) => {
    let copySteps = newSteps.slice()
    copySteps[editingSection - 1].text[idx] = text

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

const addStep = (defaultText, newSteps, setNewSteps, idx, editingSection) => {
  alert('Add step entered')
  // const [newSteps, setNewSteps] = useState([{text: [defaultStep],
  //   timers: [{h: defaultTime, m: defaultTime, s: defaultTime }],
  //   ingreds: []}])

  let copySteps  = newSteps.slice()

  // update fields
  copySteps[editingSection].text.push(defaultText)
  copySteps[editingSection].timers.push({h: '00', m: '00', s: '00' })
  copySteps[editingSection].ingreds.push([])

  setNewSteps(copySteps)

  // need to re-render
  alert(JSON.stringify(newSteps))
}

// obsolete since updateTimer added?
const addTimer = (newSteps, setNewSteps, idx, editingSection) => {
  let copySteps = newSteps.slice()
  copySteps[editingSection - 1].text[idx] = "TIMER ADDED"

  // copySections.splice(idx, 0, text)
  // copySections.push(secProp)

  setNewSteps(copySteps)
}

const updateTimer = (time, newSteps, setNewSteps, idx, editingSection, timeType) => {
  if (!isNaN(time)) {
    let copySteps = newSteps.slice()

    switch(timeType) {
      case "h":
        copySteps[editingSection - 1].timers[idx].h = time
        break;
      case "m":
        copySteps[editingSection - 1].timers[idx].m = time
        break;
      case "s":
        copySteps[editingSection - 1].timers[idx].s = time
        break;
      default:
        return
    }

    setNewSteps(copySteps)
  }

  return
}

// value={!numbered ? numberStep(prop) : prop}

export const InputStep = ({ newSteps, setNewSteps, prop, defaultText, idx, editingSection, timers}) => {
    const [toolbar, setToolbar] = useState(false)

    const toggleToolbar = () => {
      setToolbar(!toolbar)
    }

    return (
      <div className='flex flex-col'>

        <div className="flex flex-row items-start">
            <div className={`${toolbar ? 'flex flex-col justify-center' : 'hidden'} bg-bg_white mr-2`}>
              <ClockIcon size={16} className="mb-4" 
                onClick={() => addTimer(newSteps, setNewSteps, idx, editingSection)}/>
              <img src="/carrot-icon.svg" className="w-6"/>
            </div>
            <span className={`${prop !== defaultText ? 'text-black' : 'text-med_gray'}`}>
              {idx + 1 + "."}&nbsp;
            </span>
            <TextareaAutosize minRows={1} type="text" value={prop}
              onChange={(e) => {updateStep(e.target.value, newSteps, setNewSteps, idx, editingSection)}}
              onFocus={() => {prop == defaultText && updateStep('', newSteps, setNewSteps, idx, editingSection) && toggleToolbar()}}
              onBlur={() => {prop == '' && updateStep(defaultText, newSteps, setNewSteps, idx, editingSection) && toggleToolbar()}}
              // onMouseOver={() => toggleToolbar()}
              // onMouseOut={() => toggleToolbar()}
              onKeyDown={(e) => e.key === 'Enter' && addStep(defaultText, newSteps, setNewSteps, idx, editingSection)}
              className={`${prop !== defaultText ? 'text-black' : 'text-med_gray'} 
              text-base font-normal  
              border-0 focus:outline-none font-medium w-full resize-none overflow-visible bg-bg_white`}
            />
          </div>
          <div
            className='border-2 border-sage_green text-sage_green text-md py-2 px-4 rounded-full ml-5 my-4 flex justify-between items-center'
            style={{ width: '165px' }}
          >
            <ClockIcon size={16} className="mr-2"/>
            <div>
              <input type='text' value={timers[idx].h} 
                onChange={(e) => {updateTimer(e.target.value, newSteps, setNewSteps, idx, editingSection, "h")}} className='w-5 text-right focus:outline-0'></input>
              <span className='m-0 p-0 text-sm'>h</span>
              <input type='text' value={timers[idx].m}
                onChange={(e) => {updateTimer(e.target.value, newSteps, setNewSteps, idx, editingSection, "m")}} className='w-6 text-right focus:outline-0'></input>
              <span className='m-0 p-0 text-sm'>m</span>
              <input type='text' value={timers[idx].s}
                onChange={(e) => {updateTimer(e.target.value, newSteps, setNewSteps, idx, editingSection, "s")}} className='w-6 text-right focus:outline-0'></input>
              <span className='m-0 p-0 text-sm'>s</span>
            </div>
          </div>
          </div>

    )
  }
  // DO NUMBERING WITH SPAN NEXT TO TEXTAREA

  // how would you know what step/line you're in when you click to edit a step?
  // should probably just handle it via parsing the whole block of text after to split into steps
  // basically take in the whole thing as a string??? doesn't make sense, you need to attach timers and ingredients
  // check how the data was laid out
  // probably have to do what was done with the sections in the sidebar, just ad a new textarea on enter