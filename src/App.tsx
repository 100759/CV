import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

type Section = 'home' | 'education' | 'experience' | 'skills'

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const sections = {
    home: Home,
    education: Education,
    experience: Experience,
    skills: Skills,
  }

  const CurrentComponent = sections[activeSection]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 移动端导航栏 */}
      <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <div className="flex h-screen overflow-hidden">
        {/* 左侧导航栏 - 桌面端 */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {/* 主内容区 */}
        <main className="flex-1 overflow-y-auto lg:ml-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <CurrentComponent onSectionChange={setActiveSection} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App

