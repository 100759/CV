import React from 'react'

interface PartyBadgeProps {
  className?: string
  size?: number
}

const PartyBadge: React.FC<PartyBadgeProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 党徽外圈 - 红色圆形背景 */}
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="#DC2626"
          stroke="#B91C1C"
          strokeWidth="0.3"
        />
        
        {/* 党徽主体 - 锤子和镰刀组合 */}
        {/* 镰刀刀柄部分 */}
        <path
          d="M7 8C7 6.5 8.5 5 10 5C11.5 5 13 6.5 13 8C13 9.5 11.5 11 10 11C8.5 11 7 9.5 7 8Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="0.2"
        />
        
        {/* 镰刀刀刃 - 弧形刀刃 */}
        <path
          d="M10 8C10 7.5 10.5 7 11 7C11.5 7 12 7.5 12 8C12 8.5 11.5 9 11 9C10.5 9 10 8.5 10 8Z"
          fill="#FFD700"
        />
        
        {/* 镰刀刀身 - 连接部分 */}
        <path
          d="M9.5 7.5L11 6L12.5 7.5L11 9L9.5 7.5Z"
          fill="#FFD700"
        />
        
        {/* 锤子头部 - 方形锤头 */}
        <rect
          x="14"
          y="7"
          width="3.5"
          height="2.5"
          rx="0.3"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="0.2"
        />
        
        {/* 锤子柄 - 垂直手柄 */}
        <rect
          x="15.2"
          y="9.5"
          width="1.1"
          height="4"
          rx="0.3"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="0.2"
        />
        
        {/* 锤子与镰刀交叉部分 */}
        <path
          d="M13.5 8.5L15 7L16.5 8.5L15 10L13.5 8.5Z"
          fill="#FFD700"
        />
        
        {/* 党徽中心装饰 - 五角星 */}
        <path
          d="M12 9.5L12.5 11L14 11L12.8 12L13.3 13.5L12 12.5L10.7 13.5L11.2 12L10 11L11.5 11L12 9.5Z"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="0.1"
        />
        
        {/* 党徽边缘装饰线 - 双圈设计 */}
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          stroke="#FFD700"
          strokeWidth="0.2"
          opacity="0.8"
        />
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="#FFD700"
          strokeWidth="0.1"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}

export default PartyBadge
