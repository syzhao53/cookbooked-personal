import React from 'react'
import { CircleNumber } from './styles/Text'
import { useState } from 'react'
import { useSection } from '../hooks/useSection'


const EditingSidebar = ({sections, setSections, descrip, editingSection, setEditingSection, title, setTitle}) => {
  // const sectionNew = useSection()

  const addSection = () => {
    let copySections = sections.slice()

    // const [secProp, setSecProp] = useState('Section ' + (sections.length))
    copySections.push('Section ' + (sections.length))
    // copySections.push(secProp)

    setSections(copySections)
  }


  const renderSection = (sec, idx) => {
    // {<span className={`${title !== 'Recipe Title' ? 'text-black' : 'text-med_gray'}`} >
    // {title == 'Recipe Title' ? 'Recipe Overview' : title}</span>}

    if (idx == 0) { // handle intro section
      return <span className={`${title !== 'Recipe Title' ? 'text-black' : 'text-med_gray'}`} >
      {title == 'Recipe Title' ? 'Recipe Overview' : title}</span>
    } else {
      return <span className={`${sec !== 'Section ' + idx ? 'text-black' : 'text-med_gray'}`} >
      {sec}</span>
    }
  }

  // const sectionStyle = (sec, idx) => {
  //   if (idx == 0) {
  //     if (sec !== 'Recipe Title') {
  //       return 'text-black'
  //     } else {
  //       return 'text-med_gray'
  //     }
  //   }
  // }

  return (
    <div
      className="w-1/5 pt-7 border-r-2 border-light_gray h-[calc(100vh-64px)] hidden md:block"
      style={{ position: 'fixed' }}
    >
      {sections.map((sec, idx) => (
         <div
         key="section"
         className={`text-2xl cursor-pointer py-3 ${
           editingSection === idx
             ? 'bg-light_purple'
             : 'hover:bg-light_purple/50'
         }`}
         onClick={() => setEditingSection(idx)}
       >
         <div
           className={`flex items-center ml-9 pr-5 ${
             editingSection === idx && 'font-medium'
           }`}
         >
           {idx !== 0 && (
             <CircleNumber number={idx} />
           )}
           {renderSection(sec, idx)}
           {/* {<span className={`${title !== 'Recipe Title' ? 'text-black' : 'text-med_gray'}`} >
           {title == 'Recipe Title' ? 'Recipe Overview' : title}</span>} */}
         </div>
         {/* {sectionIdx !== 0 && (
           <span className="pl-16 text-base text-gray">
             {
                 duration[sectionName].hours > 0
                 ? duration[sectionName].hours + " hr " + duration[sectionName].minutes
                 : duration[sectionName].minutes + " min"
               }
           </span>
         )} */}
       </div>
      ))}
      
      {/* {Object.entries(allSections).map(
        ([sectionKey, sectionName], sectionIdx) => {
          return (
            <div
              key={sectionName}
              className={`text-2xl cursor-pointer py-3 ${
                section === sectionName
                  ? 'bg-light_purple'
                  : 'hover:bg-light_purple/50'
              }`}
              onClick={() => setSection(sectionName)}
            >
              <div
                className={`flex items-center ml-9 ${
                  section === sectionName && 'font-medium'
                }`}
              >
                {sectionIdx !== 0 && (
                  <CircleNumber number={sectionIdx} />
                )}
                {<span>{sectionName}</span>}
              </div>
              {sectionIdx !== 0 && (
                <span className="pl-16 text-base text-gray">
                  {
                      duration[sectionName].hours > 0
                      ? duration[sectionName].hours + " hr " + duration[sectionName].minutes
                      : duration[sectionName].minutes + " min"
                    }
                </span>
              )}
            </div>
          )
        }
      )} */}
              <button onClick={() => addSection()} className="bg-green-300 mt-6">
                Add Section
              </button>
    </div>
  )
}

export default EditingSidebar
