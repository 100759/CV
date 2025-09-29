import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  GraduationCap, 
  Briefcase, 
  Code2,
  Menu,
  X,
  User
} from 'lucide-react'
import PartyBadge from './PartyBadge'

interface MobileNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const MobileNav: React.FC<MobileNavProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'education', label: '教育经历', icon: GraduationCap },
    { id: 'experience', label: '工作经历', icon: Briefcase },
    { id: 'skills', label: '技能专长', icon: Code2 },
  ]

  return (
    <>
      {/* 移动端顶部导航栏 */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">付恒</h1>
              <p className="text-sm text-slate-600">个人简历</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 移动端侧边菜单 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            
            {/* 侧边菜单 */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50"
            >
              <div className="h-full flex flex-col">
                {/* 个人信息卡片 */}
                <div className="p-6 border-b border-slate-200/50 bg-gradient-to-br from-primary-50 to-accent-50">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      付
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">付恒</h2>
                    <p className="text-slate-600 mb-4">航空服务与管理专业毕业生</p>
                    
                    {/* 基本信息 */}
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center justify-center gap-2">
                        <User className="w-4 h-4" />
                        <span>男，23岁</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <PartyBadge className="w-4 h-4" size={16} />
                        <span>中共党员</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 导航菜单 */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon
                      const isActive = activeSection === item.id
                      
                      return (
                        <motion.li
                          key={item.id}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <button
                            onClick={() => {
                              onSectionChange(item.id)
                              setIsOpen(false)
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                              isActive
                                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                            }`}
                          >
                            <Icon className={`w-5 h-5 transition-transform duration-300 ${
                              isActive ? 'scale-110' : 'group-hover:scale-110'
                            }`} />
                            <span className="font-medium">{item.label}</span>
                            {isActive && (
                              <motion.div
                                layoutId="mobileActiveIndicator"
                                className="ml-auto w-2 h-2 bg-white rounded-full"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              />
                            )}
                          </button>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>

                {/* 底部装饰 */}
                <div className="p-6 border-t border-slate-200/50">
                  <div className="text-center text-sm text-slate-500">
                    <p>© 2024 个人简历</p>
                    <p className="mt-1">专业 · 创新 · 卓越</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
