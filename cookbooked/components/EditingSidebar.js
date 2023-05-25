import React from 'react'
import { CircleNumber } from './styles/Text'
import { useState } from 'react'


const EditingSidebar = ({title, setTitle}) => {
  const [editingSection, setEditingSection] = useState('intro')
  const [sections, setSections] = useState([title])

  const addSection = () => {
    sections.push('Section')
    alert('section added' + sections.length)
  }

  return (
    <div
      className="w-1/5 pt-7 border-r-2 border-light_gray h-[calc(100vh-64px)] hidden md:block"
      style={{ position: 'fixed' }}
    >
      {sections.map((sec, idx) => (
         <div
         key="section"
         className={`text-2xl cursor-pointer py-3 ${
           editingSection === 'intro'
             ? 'bg-light_purple'
             : 'hover:bg-light_purple/50'
         }`}
         onClick={() => setEditingSection('')}
       >
         <div
           className={`flex items-center ml-9 pr-5 ${
             editingSection === 'intro' && 'font-medium'
           }`}
         >
           {/* {sectionIdx !== 0 && (
             <CircleNumber number={sectionIdx} />
           )} */}
           {<span className={`${title !== 'Recipe Title' ? 'text-black' : 'text-med_gray'}`} >
           {title == 'Recipe Title' ? 'Recipe Overview' : title}</span>}
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
