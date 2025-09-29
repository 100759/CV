import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Award, 
  Briefcase, 
  Code2, 
  GraduationCap,
  Star,
  Target,
  Users,
  Zap
} from 'lucide-react'

interface HomeProps {
  onSectionChange: (section: string) => void
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  const summaryCards = [
    {
      id: 'education',
      title: '教育经历',
      description: '航空服务与管理专业背景，具备专业的服务技能和管理能力',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      stats: ['航空服务专业', '管理技能', '服务理念']
    },
    {
      id: 'experience',
      title: '工作经历',
      description: '作业帮专业销售培训，丰富的实习和正式工作经验',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      stats: ['作业帮销售', '专业培训', '团队协作']
    },
    {
      id: 'skills',
      title: '技能专长',
      description: '销售能力、设计技能、技术开发，全方位能力展示',
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
      stats: ['PS设计', '视频剪辑', '编程开发']
    }
  ]

  const achievements = [
    { icon: Award, text: '航空服务专业毕业', color: 'text-yellow-500' },
    { icon: Star, text: '英语四六级证书', color: 'text-blue-500' },
    { icon: Target, text: '作业帮销售培训', color: 'text-green-500' },
    { icon: Users, text: '服务管理技能', color: 'text-purple-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 英雄区域 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10"></div>
        <div className="relative section-padding pt-24 lg:pt-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
              >
                你好，我是
                <span className="gradient-text block mt-2">付恒</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                专业的航空服务与管理专业毕业生，拥有丰富的服务经验和团队管理能力。
                从航空服务到销售管理，从客户服务到团队协作，我始终追求卓越和创新。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
                    >
                      <Icon className={`w-5 h-5 ${achievement.color}`} />
                      <span className="text-slate-700 font-medium">{achievement.text}</span>
                    </motion.div>
                  )
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  查看完整简历
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
                  下载PDF版本
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 内容摘要区域 */}
      <section className="section-padding bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">简历概览</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              点击下方卡片查看详细内容，了解我的完整经历和能力
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {summaryCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div 
                    className="glass-effect rounded-2xl p-8 h-full card-hover cursor-pointer"
                    onClick={() => onSectionChange(card.id)}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary-600 transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {card.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                          <span className="text-slate-600 text-sm">{stat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all duration-300">
                      查看详情
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 个人特色区域 */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">个人特色</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              多元化的背景让我具备了独特的视角和全面的能力
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: '快速学习', desc: '从航空服务到销售管理，快速适应新领域' },
              { icon: Target, title: '目标导向', desc: '清晰的职业规划，持续追求卓越' },
              { icon: Users, title: '团队协作', desc: '丰富的团队管理经验，善于沟通协调' },
              { icon: Code2, title: '服务理念', desc: '专业的服务技能，创造客户价值' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

