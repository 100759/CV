import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  MapPin,
  Star,
  Trophy
} from 'lucide-react'

const Education: React.FC = () => {
  const educationData = [
    {
      period: '2018-2022',
      level: '大学本科',
      school: '河北师范大学',
      major: '播音与主持艺术专业',
      location: '河北省石家庄市',
      gpa: '3.8/4.0',
      achievements: [
        '担任团支部书记职务，管理班级事务，组织各类活动',
        '获得河北省优秀毕业生称号，专业成绩优异',
        '通过英语四六级考试（CET-4: 580分，CET-6: 520分）',
        '参与新校区建设相关工作，负责视觉设计和宣传工作',
        '2020年通过河北省播音联考，专业排名前10%'
      ],
      highlights: [
        '设计展板、logo、书籍封面等视觉作品，展现创意设计能力',
        '组织班级活动，提升团队凝聚力，培养领导能力',
        '参与校园文化建设，策划文艺活动，丰富校园生活',
        '担任学生会宣传部部长，负责宣传工作，提升沟通协调能力',
        '主持各类校园活动，积累丰富的舞台经验和表达能力'
      ],
      skills: ['播音主持', '视觉设计', '活动策划', '团队管理', '语言表达', '舞台表演'],
      type: 'university',
      color: 'from-blue-500 to-cyan-500',
      duration: '4年',
      status: '已毕业'
    }
  ]

  const certificates = [
    { 
      name: '河北省优秀毕业生', 
      year: '2022', 
      icon: Trophy, 
      color: 'text-yellow-500',
      bgColor: 'from-yellow-400 to-orange-500',
      description: '省级荣誉称号'
    },
    { 
      name: '英语四级证书', 
      year: '2020', 
      icon: Award, 
      color: 'text-blue-500',
      bgColor: 'from-blue-400 to-cyan-500',
      description: 'CET-4: 580分'
    },
    { 
      name: '英语六级证书', 
      year: '2021', 
      icon: Award, 
      color: 'text-green-500',
      bgColor: 'from-green-400 to-emerald-500',
      description: 'CET-6: 520分'
    },
    { 
      name: '河北省播音联考', 
      year: '2020', 
      icon: Star, 
      color: 'text-purple-500',
      bgColor: 'from-purple-400 to-pink-500',
      description: '专业排名前10%'
    }
  ]

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
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">教育经历</h1>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              从播音主持到全面发展，记录我的大学成长轨迹
            </p>
          </motion.div>
        </div>
      </section>

      {/* 教育经历详情 */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 左侧：教育基本信息 */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8 h-fit sticky top-8"
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${educationData[0].color} flex items-center justify-center shadow-lg`}>
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{educationData[0].school}</h3>
                  <p className="text-lg text-primary-600 font-semibold">{educationData[0].major}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">学习时间</span>
                    <span className="text-slate-800 font-semibold">{educationData[0].period}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">学历层次</span>
                    <span className="text-slate-800 font-semibold">{educationData[0].level}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">GPA成绩</span>
                    <span className="text-slate-800 font-semibold">{educationData[0].gpa}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">学习时长</span>
                    <span className="text-slate-800 font-semibold">{educationData[0].duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">毕业状态</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {educationData[0].status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600 font-medium">所在地区</span>
                    <span className="text-slate-800 font-semibold flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {educationData[0].location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 右侧：详细内容 */}
            <div className="lg:col-span-2">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* 技能标签 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary-500" />
                      核心技能
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.skills.map((skill, skillIndex) => (
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

                  {/* 主要成就 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-500" />
                      主要成就
                    </h4>
                    <ul className="space-y-4">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* 实践经历 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-accent-500" />
                      实践经历
                    </h4>
                    <ul className="space-y-4">
                      {edu.highlights.map((highlight, hlIndex) => (
                        <motion.li
                          key={hlIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: hlIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 leading-relaxed">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 证书展示 */}
      <section className="section-padding bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">获得证书</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              学习路上的重要里程碑，见证我的努力与成长
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 text-center card-hover group relative overflow-hidden"
                >
                  {/* 背景装饰 */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.bgColor} opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cert.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{cert.name}</h3>
                    <p className="text-slate-500 text-sm mb-2">{cert.year}</p>
                    <p className="text-xs text-slate-400">{cert.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 学习成果总结 */}
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
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">学习成果总结</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                通过系统的专业学习和丰富的实践经历，我不仅掌握了扎实的专业技能，
                更培养了良好的组织协调能力和创新思维，为后续的职业发展奠定了坚实基础。
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">4年</div>
                  <div className="text-slate-600 font-medium">大学学习</div>
                  <div className="text-sm text-slate-500 mt-1">系统专业训练</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-accent-600 mb-2">3年</div>
                  <div className="text-slate-600 font-medium">团支部书记</div>
                  <div className="text-sm text-slate-500 mt-1">管理经验</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">4+</div>
                  <div className="text-slate-600 font-medium">重要证书</div>
                  <div className="text-sm text-slate-500 mt-1">专业认证</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">10%</div>
                  <div className="text-slate-600 font-medium">联考排名</div>
                  <div className="text-sm text-slate-500 mt-1">专业前10%</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Education