import React from 'react'
import { CircleNumber } from './styles/Text'
import SidebarTimer from './SidebarTimer'

const RecipeSidebar = ({ duration, section, setSection, allSections, allTimers }) => {
const createSidebarTimers = () => {
    let timerArr = []

    for (const [secName, secTimers] of Object.entries(allTimers)) {
      if (secTimers !== undefined) {
        for (const [stepNum, timer] of Object.entries(secTimers)) {
          timerArr.push(timer)
        }
      }
    }

    return timerArr
  }

// var renderTimers = createSidebarTimers().map(item => <div> {item} </div>)
        // {/* {allTimers["Baking"][1].timer[2] && <SidebarTimer timer={allTimers["Baking"][1].timer} timerName={allTimers["Baking"][1].name} />} */}


  return (
    <div
      className="w-1/5 pt-7 border-r-2 border-light_gray h-[calc(100vh-64px)] hidden lg:block"
      style={{ position: 'fixed' }}
    >
      {Object.entries(allSections).map(
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
      )}
      <div className="w-full" style={{ position: 'absolute', bottom: '0' }}>
        {/* {hasStarted && <SidebarTimer timer={timer} timerName={timerName}/>}
        {hasStarted2 && <SidebarTimer timer={timer2} timerName={timerName2}/>} */}
        {createSidebarTimers().map((item) => (
          <div>{item.timer[2] && <SidebarTimer timer={item.timer} timerName={item.name}/>}</div>
        ))}
        {/* {sectionTimers !== undefined ? sectionTimers.map((timer) => (
          timer.timer[2] && <SidebarTimer timer={timer.timer} timerName={timer.name} />
        ))
        : ''} */}
        {/* {allTimers["Baking"][1].timer[2] && <SidebarTimer timer={allTimers["Baking"][1].timer} timerName={allTimers["Baking"][1].name} />} */}
        <div className="border-t-2 border-light_gray">
          <div className="py-4 px-8">
            <span
              className="border-b-2 border-light_gray text-gray"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                localStorage.clear()
                location.reload()
              }}
            >
              Restart Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeSidebar
