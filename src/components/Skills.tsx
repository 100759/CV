import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Brain,
  Camera,
  Video,
  Database,
  Globe,
  Smartphone,
  Zap,
  Target,
  Users,
  Award,
  Star
} from 'lucide-react'

interface SkillsProps {
  onSectionChange?: (section: string) => void
}

const Skills: React.FC<SkillsProps> = ({ onSectionChange }) => {
  const [activeCategory, setActiveCategory] = useState<'sales' | 'design' | 'tech'>('sales')

  const skillCategories = {
    sales: {
      title: '销售能力',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      description: '系统接受过作业帮专业销售培训，具备扎实的销售理论基础和实践经验',
      experience: '2年+',
      status: '专业级',
      skills: [
        {
          name: '销售技巧',
          level: 95,
          description: '掌握多种销售方法和客户沟通技巧',
          details: ['客户需求分析', '产品介绍技巧', '异议处理', '成交技巧'],
          icon: Target,
          color: 'text-green-600'
        },
        {
          name: '客户关系管理',
          level: 90,
          description: '建立并维护优质客户关系',
          details: ['客户分类管理', '定期回访', '客户满意度提升', '长期合作维护'],
          icon: Users,
          color: 'text-blue-600'
        },
        {
          name: '团队协作',
          level: 88,
          description: '在团队中发挥积极作用',
          details: ['团队沟通', '协作配合', '经验分享', '新人指导'],
          icon: Award,
          color: 'text-purple-600'
        },
        {
          name: '数据分析',
          level: 85,
          description: '通过数据分析优化销售策略',
          details: ['销售数据分析', '客户行为分析', '市场趋势分析', '业绩预测'],
          icon: Brain,
          color: 'text-orange-600'
        }
      ],
      achievements: [
        '完成销售业绩目标120%',
        '获得季度销售冠军',
        '客户满意度达到98%',
        '建立200+优质客户关系'
      ]
    },
    design: {
      title: '设计能力',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      description: '精通PS、视频剪辑等设计软件，具备良好的视觉设计能力和创意思维',
      experience: '4年+',
      status: '精通级',
      skills: [
        {
          name: 'Photoshop',
          level: 92,
          description: '精通图像处理和平面设计',
          details: ['图像修饰', '海报设计', 'logo设计', '书籍封面设计'],
          icon: Palette,
          color: 'text-purple-600'
        },
        {
          name: '视频剪辑',
          level: 88,
          description: '熟练使用视频剪辑软件',
          details: ['视频剪辑', '特效制作', '音频处理', '视频后期'],
          icon: Video,
          color: 'text-pink-600'
        },
        {
          name: '视觉设计',
          level: 90,
          description: '具备良好的视觉设计能力',
          details: ['版面设计', '色彩搭配', '字体设计', '品牌视觉'],
          icon: Camera,
          color: 'text-indigo-600'
        },
        {
          name: '创意思维',
          level: 87,
          description: '具备独特的创意思维和设计理念',
          details: ['创意构思', '方案设计', '视觉表达', '用户体验'],
          icon: Zap,
          color: 'text-cyan-600'
        }
      ],
      achievements: [
        '设计展板、logo、书籍封面',
        '参与新校区建设视觉设计',
        '制作活动宣传材料',
        '获得师生一致好评'
      ]
    },
    tech: {
      title: '技术能力',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      description: '掌握编程技能和AI模型训练，具备技术开发和学习能力',
      experience: '1年+',
      status: '熟练级',
      skills: [
        {
          name: '编程开发',
          level: 80,
          description: '掌握多种编程语言和开发技术',
          details: ['JavaScript/TypeScript', 'React/Vue', 'Node.js', '数据库设计'],
          icon: Code2,
          color: 'text-blue-600'
        },
        {
          name: 'AI模型训练',
          level: 75,
          description: '了解AI模型训练和应用',
          details: ['机器学习基础', '模型训练', '数据处理', '模型优化'],
          icon: Brain,
          color: 'text-green-600'
        },
        {
          name: '前端开发',
          level: 85,
          description: '熟练进行前端界面开发',
          details: ['HTML/CSS', '响应式设计', '组件开发', '性能优化'],
          icon: Globe,
          color: 'text-cyan-600'
        },
        {
          name: '技术学习',
          level: 90,
          description: '具备快速学习新技术的能力',
          details: ['技术调研', '快速上手', '问题解决', '持续学习'],
          icon: Star,
          color: 'text-orange-600'
        }
      ],
      achievements: [
        '独立完成多个前端项目',
        '掌握现代前端开发技术',
        '具备AI技术应用能力',
        '持续学习新技术'
      ]
    }
  }

  const currentCategory = skillCategories[activeCategory]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 页面标题 */}
      <section className="section-padding pt-24 lg:pt-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">技能专长</h1>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              多元化的技能组合，为职业发展提供全面支撑
            </p>
          </motion.div>
        </div>
      </section>

      {/* 技能分类切换 */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="glass-effect rounded-2xl p-2 shadow-lg">
              <div className="flex gap-2">
                {Object.entries(skillCategories).map(([key, category]) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                        activeCategory === key
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105'
                          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100 hover:scale-105'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {category.title}
                      <span className="text-xs opacity-75">({category.skills.length})</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* 当前分类内容 */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* 分类介绍 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 text-center relative overflow-hidden group"
            >
              {/* 背景装饰 */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${currentCategory.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center shadow-lg`}>
                  <currentCategory.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{currentCategory.title}</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">{currentCategory.description}</p>
                
                {/* 技能信息标签 */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                    <Star className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-700 font-medium">{currentCategory.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                    <Award className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-700 font-medium">{currentCategory.status}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                    <Target className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-700 font-medium">{currentCategory.skills.length}项技能</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 技能列表 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {currentCategory.skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-3xl p-8 card-hover group relative overflow-hidden"
                  >
                    {/* 背景装饰 */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${currentCategory.color} opacity-5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${currentCategory.bgColor} flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 ${skill.color}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800">{skill.name}</h3>
                            <p className="text-slate-600 text-sm">{skill.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-bold text-primary-600">{skill.level}%</span>
                          <div className="text-sm text-slate-500">熟练度</div>
                        </div>
                      </div>
                      
                      {/* 进度条 */}
                      <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-4 rounded-full bg-gradient-to-r ${currentCategory.color} shadow-lg`}
                        />
                      </div>

                      {/* 技能详情 */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-600 mb-3">核心能力</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {skill.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + index * 0.1 + detailIndex * 0.1, duration: 0.3 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 p-2 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-600 text-sm font-medium">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* 成就展示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* 背景装饰 */}
              <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${currentCategory.color} opacity-10 rounded-full -translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-2">
                  <Award className="w-6 h-6 text-primary-500" />
                  相关成就
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentCategory.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl hover:shadow-md transition-all duration-300 group/item"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 技能总结 */}
      <section className="section-padding bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">技能优势</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              多元化的技能背景让我能够从不同角度思考和解决问题
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '综合能力',
                description: '销售、设计、技术三位一体，具备全面的职业能力',
                icon: Brain,
                color: 'from-purple-500 to-pink-500',
                features: ['多领域技能', '全面思维', '综合应用']
              },
              {
                title: '学习能力',
                description: '快速适应新领域，持续学习新技术和新技能',
                icon: Zap,
                color: 'from-blue-500 to-cyan-500',
                features: ['快速上手', '持续学习', '技术更新']
              },
              {
                title: '创新思维',
                description: '结合不同领域的知识，创造独特的解决方案',
                icon: Target,
                color: 'from-green-500 to-emerald-500',
                features: ['创意设计', '问题解决', '价值创造']
              }
            ].map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-3xl p-8 text-center card-hover group relative overflow-hidden"
                >
                  {/* 背景装饰 */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${advantage.color} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{advantage.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{advantage.description}</p>
                    
                    {/* 特色标签 */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {advantage.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 技能数据统计 */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 text-center relative overflow-hidden"
          >
            {/* 背景装饰 */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 opacity-10 rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-400 opacity-10 rounded-full translate-y-12 translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">技能数据统计</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                通过多年的学习和实践，我积累了丰富的技能经验，
                形成了独特的技能组合，为职业发展提供了强有力的支撑。
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">12+</div>
                  <div className="text-slate-600 font-medium">核心技能</div>
                  <div className="text-sm text-slate-500 mt-1">专业技能</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-accent-600 mb-2">3</div>
                  <div className="text-slate-600 font-medium">技能领域</div>
                  <div className="text-sm text-slate-500 mt-1">销售·设计·技术</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">90%+</div>
                  <div className="text-slate-600 font-medium">平均熟练度</div>
                  <div className="text-sm text-slate-500 mt-1">专业水平</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">7年+</div>
                  <div className="text-slate-600 font-medium">学习经验</div>
                  <div className="text-sm text-slate-500 mt-1">持续发展</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Skills
