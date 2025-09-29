import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  Users, 
  Target,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

interface ExperienceProps {
  onSectionChange?: (section: string) => void
}

const Experience: React.FC<ExperienceProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState<'internship' | 'fulltime'>('fulltime')

  const fulltimeExperience = [
    {
      company: '作业帮',
      position: '销售顾问',
      period: '2022.07 - 至今',
      location: '北京市',
      type: 'fulltime',
      duration: '2年+',
      status: '在职',
      description: '负责在线教育产品的销售推广，为客户提供专业的学习解决方案',
      achievements: [
        '完成销售业绩目标120%，获得季度销售冠军',
        '客户满意度达到98%，获得客户高度认可',
        '参与客户服务培训，担任服务礼仪培训讲师',
        '建立并维护了200+优质客户关系',
        '连续6个月超额完成销售目标'
      ],
      skills: ['销售技巧', '客户关系管理', '团队协作', '数据分析', '培训指导', '目标管理'],
      highlights: [
        '系统接受过作业帮专业销售培训，掌握完整的销售体系',
        '掌握多种销售方法和客户沟通技巧，提升转化率',
        '具备良好的抗压能力和目标导向思维，适应快节奏工作',
        '在团队中起到积极的带头作用，协助新员工成长',
        '建立完善的客户档案管理系统，提升工作效率'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ]

  const internshipExperience = [
    {
      company: '河北师范大学',
      position: '校园活动组织者',
      period: '2020.09 - 2022.06',
      location: '石家庄市',
      type: 'internship',
      duration: '2年',
      status: '已结束',
      description: '负责校园文化活动的策划与组织，提升校园文化氛围',
      achievements: [
        '成功组织10+场大型校园活动，参与人数超过5000人',
        '设计制作活动展板、宣传海报等视觉材料',
        '协调各部门资源，确保活动顺利进行',
        '获得"优秀组织者"称号',
        '建立完善的活动策划流程和标准'
      ],
      skills: ['活动策划', '视觉设计', '团队协调', '项目管理', '创意设计', '资源整合'],
      highlights: [
        '独立完成活动从策划到执行的全流程管理',
        '具备良好的创意设计和执行能力，提升活动效果',
        '培养了优秀的沟通协调和项目管理技能',
        '为后续职业发展积累了宝贵的实践经验',
        '建立良好的团队协作和领导能力'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      company: '石家庄市第一中学',
      position: '播音主持实习生',
      period: '2018.09 - 2020.06',
      location: '石家庄市',
      type: 'internship',
      duration: '2年',
      status: '已结束',
      description: '参与学校各类文艺活动的播音主持工作',
      achievements: [
        '主持学校大型文艺汇演20+场',
        '参与校园广播站节目制作',
        '协助老师进行播音主持专业教学',
        '获得师生一致好评',
        '培养了一批优秀的播音主持学员'
      ],
      skills: ['播音主持', '语言表达', '临场应变', '团队合作', '教学指导', '节目制作'],
      highlights: [
        '扎实的播音主持专业基础，掌握标准普通话',
        '优秀的语言表达和沟通能力，提升个人魅力',
        '良好的舞台表现力和临场应变能力',
        '为后续发展奠定了坚实的专业基础',
        '具备教学指导能力，帮助他人成长'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ]

  const currentExperience = activeTab === 'fulltime' ? fulltimeExperience : internshipExperience

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
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">工作经历</h1>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              从实习到正式工作，记录我的职业成长轨迹
            </p>
          </motion.div>
        </div>
      </section>

      {/* 标签切换 */}
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
                <button
                  onClick={() => setActiveTab('fulltime')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === 'fulltime'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100 hover:scale-105'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  正式工作
                  <span className="text-xs opacity-75">({fulltimeExperience.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('internship')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === 'internship'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100 hover:scale-105'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  实习经历
                  <span className="text-xs opacity-75">({internshipExperience.length})</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* 工作经历内容 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {currentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8 shadow-xl border border-white/20 relative overflow-hidden group"
              >
                {/* 背景装饰 */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}></div>
                
                {/* 公司信息头部 */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}>
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-800 mb-1">{exp.company}</h3>
                          <p className="text-xl text-primary-600 font-semibold">{exp.position}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                      
                      {/* 工作信息标签 */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700 font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700 font-medium">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                          <TrendingUp className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700 font-medium">{exp.duration}</span>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                          exp.status === '在职' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {exp.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 技能标签 */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary-500" />
                      核心技能
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* 主要成就 */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary-500" />
                        主要成就
                      </h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* 工作亮点 */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-accent-500" />
                        工作亮点
                      </h4>
                      <ul className="space-y-4">
                        {exp.highlights.map((highlight, hlIndex) => (
                          <motion.li
                            key={hlIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: hlIndex * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 leading-relaxed text-sm">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 职业发展总结 */}
      <section className="section-padding bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">职业发展轨迹</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              从校园到职场，从实习到正式工作，每一步都是成长
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stage: '实习阶段',
                period: '2018-2022',
                description: '在校园中积累实践经验，培养专业技能',
                icon: Users,
                color: 'from-blue-500 to-cyan-500',
                achievements: ['2个实习岗位', '4年实践经验', '多项技能提升']
              },
              {
                stage: '正式工作',
                period: '2022-至今',
                description: '进入职场，发挥专业能力，创造价值',
                icon: Building2,
                color: 'from-green-500 to-emerald-500',
                achievements: ['销售冠军', '客户满意', '团队协作']
              },
              {
                stage: '未来规划',
                period: '持续发展',
                description: '不断提升，追求更高的职业目标',
                icon: TrendingUp,
                color: 'from-purple-500 to-pink-500',
                achievements: ['技能提升', '职业发展', '价值创造']
              }
            ].map((stage, index) => {
              const Icon = stage.icon
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
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stage.color} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{stage.stage}</h3>
                    <p className="text-primary-600 font-semibold mb-4 text-lg">{stage.period}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{stage.description}</p>
                    
                    {/* 成就标签 */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {stage.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {achievement}
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

      {/* 工作能力总结 */}
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
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">工作能力总结</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                通过多年的工作实践，我积累了丰富的销售经验和管理能力，
                具备良好的团队协作精神和持续学习能力，为职业发展奠定了坚实基础。
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">120%</div>
                  <div className="text-slate-600 font-medium">业绩完成率</div>
                  <div className="text-sm text-slate-500 mt-1">销售目标</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-accent-600 mb-2">98%</div>
                  <div className="text-slate-600 font-medium">客户满意度</div>
                  <div className="text-sm text-slate-500 mt-1">服务质量</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-slate-600 font-medium">客户关系</div>
                  <div className="text-sm text-slate-500 mt-1">维护数量</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">6+</div>
                  <div className="text-slate-600 font-medium">核心技能</div>
                  <div className="text-sm text-slate-500 mt-1">专业能力</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience

