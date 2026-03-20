// 分页配置常量
export const PAGINATION_CONFIG = {
  // 每页显示的记录数
  PAGE_SIZE: 20,
  
  // 最大缓存页数（用于内存管理）
  MAX_CACHED_PAGES: 3,
  
  // 清理功能默认值
  CLEANUP: {
    DEFAULT_DAYS: 7,
    DEFAULT_COUNT: 100
  }
} as const;

// 类型定义
export type PaginationConfig = typeof PAGINATION_CONFIG;