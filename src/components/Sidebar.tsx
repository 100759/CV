import React from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  GraduationCap, 
  Briefcase, 
  Code2,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'education', label: '教育经历', icon: GraduationCap },
    { id: 'experience', label: '工作经历', icon: Briefcase },
    { id: 'skills', label: '技能专长', icon: Code2 },
  ]

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-80 bg-white/90 backdrop-blur-md border-r border-slate-200/50 shadow-xl hidden lg:block"
    >
      <div className="h-full flex flex-col">
        {/* 个人信息卡片 */}
        <div className="p-8 border-b border-slate-200/50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              张
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">张三</h1>
            <p className="text-slate-600 mb-4">前端开发工程师 & 设计师</p>
            
            {/* 基本信息 */}
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-center gap-2">
                <User className="w-4 h-4" />
                <span>男，25岁</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>中共党员</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>zhangsan@email.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>138-0000-0000</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>河北省石家庄市</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 p-6">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-2"
          >
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
                    onClick={() => onSectionChange(item.id)}
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
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.li>
              )
            })}
          </motion.ul>
        </nav>

        {/* 底部装饰 */}
        <div className="p-6 border-t border-slate-200/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center text-sm text-slate-500"
          >
            <p>© 2024 个人简历</p>
            <p className="mt-1">专业 · 创新 · 卓越</p>
          </motion.div>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar

