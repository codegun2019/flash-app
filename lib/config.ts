// ============================================================================
// FLASH APP CONFIGURATION
// ============================================================================
// ไฟล์รวมการตั้งค่าทั้งหมดของแอป
// รวมลิงก์, ข้อความ, เมนู, และการตั้งค่าต่างๆ

// ============================================================================
// APP METADATA & BASIC INFO
// ============================================================================
export const APP_CONFIG = {
  name: "Flash24Hr Gaming",
  version: "1.0.0",
  developer: "ThaiGaming Corporation",
  description: "แอปเกมคาสิโนออนไลน์ 24 ชั่วโมง",
  website: "https://flash24hr.com",
  support: "support@flash24hr.com",
  copyright: "© 2024 ThaiGaming Corporation. All rights reserved.",
} as const

// ============================================================================
// EXTERNAL LINKS & URLs
// ============================================================================
export const LINKS = {
  // App Store Links
  appStore: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.flash24hr.gaming",
    appStore: "https://apps.apple.com/app/flash24hr-gaming/id123456789",
    directDownload: "https://flash24hr.com/download",
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/flash24hr",
    twitter: "https://twitter.com/flash24hr",
    instagram: "https://instagram.com/flash24hr",
    youtube: "https://youtube.com/flash24hr",
    line: "https://line.me/flash24hr",
  },
  
  // Support & Contact
  support: {
    helpCenter: "https://flash24hr.com/help",
    contactUs: "https://flash24hr.com/contact",
    liveChat: "https://flash24hr.com/chat",
    email: "support@flash24hr.com",
    phone: "+66-2-123-4567",
  },
  
  // Legal & Policy
  legal: {
    privacyPolicy: "https://flash24hr.com/privacy",
    termsOfService: "https://flash24hr.com/terms",
    responsibleGaming: "https://flash24hr.com/responsible-gaming",
    license: "https://flash24hr.com/license",
  },
  
  // Gaming & Features
  gaming: {
    games: "https://flash24hr.com/games",
    promotions: "https://flash24hr.com/promotions",
    tournaments: "https://flash24hr.com/tournaments",
    leaderboard: "https://flash24hr.com/leaderboard",
  },
} as const

// ============================================================================
// TEXT CONTENT & TRANSLATIONS
// ============================================================================
export const TEXT = {
  // Common Actions
  actions: {
    download: "ดาวน์โหลด",
    install: "ติดตั้ง",
    open: "เปิด",
    uninstall: "ถอนการติดตั้ง",
    play: "เล่นเกม",
    register: "สมัครสมาชิก",
    login: "เข้าสู่ระบบ",
    logout: "ออกจากระบบ",
    save: "บันทึก",
    cancel: "ยกเลิก",
    confirm: "ยืนยัน",
    delete: "ลบ",
    edit: "แก้ไข",
    add: "เพิ่ม",
    search: "ค้นหา",
    filter: "กรอง",
    sort: "เรียงลำดับ",
    refresh: "รีเฟรช",
    share: "แชร์",
    copy: "คัดลอก",
    paste: "วาง",
    undo: "ยกเลิก",
    redo: "ทำซ้ำ",
  },
  
  // Status & Messages
  status: {
    loading: "กำลังโหลด...",
    success: "สำเร็จ",
    error: "เกิดข้อผิดพลาด",
    warning: "คำเตือน",
    info: "ข้อมูล",
    pending: "รอดำเนินการ",
    completed: "เสร็จสิ้น",
    failed: "ล้มเหลว",
    offline: "ออฟไลน์",
    online: "ออนไลน์",
    connecting: "กำลังเชื่อมต่อ...",
    connected: "เชื่อมต่อแล้ว",
    disconnected: "ตัดการเชื่อมต่อ",
  },
  
  // Navigation & Menu
  navigation: {
    home: "หน้าแรก",
    games: "เกม",
    promotions: "โปรโมชั่น",
    tournaments: "ทัวร์นาเมนต์",
    leaderboard: "อันดับ",
    profile: "โปรไฟล์",
    settings: "ตั้งค่า",
    help: "ช่วยเหลือ",
    about: "เกี่ยวกับ",
    contact: "ติดต่อ",
    news: "ข่าวสาร",
    events: "กิจกรรม",
    rewards: "รางวัล",
    wallet: "กระเป๋าเงิน",
    history: "ประวัติ",
    support: "สนับสนุน",
  },
  
  // Gaming Terms
  gaming: {
    playNow: "เล่นเดี๋ยวนี้",
    joinGame: "เข้าร่วมเกม",
    createRoom: "สร้างห้อง",
    joinRoom: "เข้าร่วมห้อง",
    gameRules: "กติกาเกม",
    gameHistory: "ประวัติเกม",
    gameStats: "สถิติเกม",
    gameSettings: "ตั้งค่าเกม",
    gameMode: "โหมดเกม",
    difficulty: "ระดับความยาก",
    score: "คะแนน",
    level: "เลเวล",
    experience: "ประสบการณ์",
    coins: "เหรียญ",
    gems: "เพชร",
    tickets: "ตั๋ว",
    powerUps: "พลังพิเศษ",
  },
  
  // Financial Terms
  financial: {
    deposit: "ฝากเงิน",
    withdraw: "ถอนเงิน",
    balance: "ยอดเงิน",
    transaction: "ธุรกรรม",
    payment: "การชำระเงิน",
    bonus: "โบนัส",
    reward: "รางวัล",
    cashback: "เงินคืน",
    commission: "คอมมิชชั่น",
    fee: "ค่าธรรมเนียม",
    tax: "ภาษี",
    currency: "สกุลเงิน",
    exchange: "อัตราแลกเปลี่ยน",
    transfer: "โอนเงิน",
    refund: "คืนเงิน",
  },
  
  // User Interface
  ui: {
    welcome: "ยินดีต้อนรับ",
    hello: "สวัสดี",
    goodbye: "ลาก่อน",
    thankYou: "ขอบคุณ",
    please: "กรุณา",
    sorry: "ขออภัย",
    congratulations: "ยินดีด้วย",
    wellDone: "ทำได้ดีมาก",
    tryAgain: "ลองใหม่อีกครั้ง",
    next: "ถัดไป",
    previous: "ก่อนหน้า",
    first: "แรก",
    last: "สุดท้าย",
    more: "เพิ่มเติม",
    less: "น้อยลง",
    show: "แสดง",
    hide: "ซ่อน",
    expand: "ขยาย",
    collapse: "ย่อ",
    minimize: "ย่อเล็กสุด",
    maximize: "ขยายใหญ่สุด",
  },
} as const

// ============================================================================
// MENU STRUCTURE & NAVIGATION
// ============================================================================
export const MENU = {
  // Main Navigation Menu
  main: [
    {
      id: "home",
      label: "หน้าแรก",
      path: "/",
      icon: "home",
      children: [],
    },
    {
      id: "games",
      label: "เกม",
      path: "/games",
      icon: "gamepad",
      children: [
        { id: "slot", label: "สล็อต", path: "/games/slot" },
        { id: "poker", label: "โป๊กเกอร์", path: "/games/poker" },
        { id: "roulette", label: "รูเล็ต", path: "/games/roulette" },
        { id: "baccarat", label: "บาคาร่า", path: "/games/baccarat" },
        { id: "blackjack", label: "แบล็คแจ็ค", path: "/games/blackjack" },
        { id: "dice", label: "ลูกเต๋า", path: "/games/dice" },
      ],
    },
    {
      id: "promotions",
      label: "โปรโมชั่น",
      path: "/promotions",
      icon: "gift",
      children: [
        { id: "welcome", label: "ต้อนรับสมาชิกใหม่", path: "/promotions/welcome" },
        { id: "deposit", label: "โบนัสฝากเงิน", path: "/promotions/deposit" },
        { id: "cashback", label: "เงินคืน", path: "/promotions/cashback" },
        { id: "tournament", label: "ทัวร์นาเมนต์", path: "/promotions/tournament" },
        { id: "vip", label: "โปรแกรม VIP", path: "/promotions/vip" },
      ],
    },
    {
      id: "tournaments",
      label: "ทัวร์นาเมนต์",
      path: "/tournaments",
      icon: "trophy",
      children: [
        { id: "ongoing", label: "กำลังดำเนินการ", path: "/tournaments/ongoing" },
        { id: "upcoming", label: "เร็วๆ นี้", path: "/tournaments/upcoming" },
        { id: "completed", label: "เสร็จสิ้น", path: "/tournaments/completed" },
        { id: "leaderboard", label: "อันดับ", path: "/tournaments/leaderboard" },
      ],
    },
    {
      id: "support",
      label: "ช่วยเหลือ",
      path: "/support",
      icon: "help-circle",
      children: [
        { id: "faq", label: "คำถามที่พบบ่อย", path: "/support/faq" },
        { id: "contact", label: "ติดต่อเรา", path: "/support/contact" },
        { id: "live-chat", label: "แชทสด", path: "/support/live-chat" },
        { id: "tutorial", label: "คู่มือการใช้งาน", path: "/support/tutorial" },
      ],
    },
  ],
  
  // User Menu (Profile Dropdown)
  user: [
    {
      id: "profile",
      label: "โปรไฟล์",
      path: "/profile",
      icon: "user",
    },
    {
      id: "wallet",
      label: "กระเป๋าเงิน",
      path: "/wallet",
      icon: "wallet",
    },
    {
      id: "history",
      label: "ประวัติ",
      path: "/history",
      icon: "clock",
    },
    {
      id: "settings",
      label: "ตั้งค่า",
      path: "/settings",
      icon: "settings",
    },
    {
      id: "logout",
      label: "ออกจากระบบ",
      path: "/logout",
      icon: "log-out",
    },
  ],
  
  // Footer Menu
  footer: [
    {
      id: "company",
      label: "บริษัท",
      children: [
        { id: "about", label: "เกี่ยวกับเรา", path: "/about" },
        { id: "careers", label: "ร่วมงานกับเรา", path: "/careers" },
        { id: "press", label: "ข่าวสาร", path: "/press" },
        { id: "partners", label: "พันธมิตร", path: "/partners" },
      ],
    },
    {
      id: "legal",
      label: "กฎหมาย",
      children: [
        { id: "privacy", label: "ความเป็นส่วนตัว", path: "/privacy" },
        { id: "terms", label: "ข้อกำหนดการใช้งาน", path: "/terms" },
        { id: "responsible-gaming", label: "การเล่นเกมอย่างรับผิดชอบ", path: "/responsible-gaming" },
        { id: "license", label: "ใบอนุญาต", path: "/license" },
      ],
    },
    {
      id: "support",
      label: "สนับสนุน",
      children: [
        { id: "help-center", label: "ศูนย์ช่วยเหลือ", path: "/help" },
        { id: "contact", label: "ติดต่อเรา", path: "/contact" },
        { id: "live-chat", label: "แชทสด", path: "/chat" },
        { id: "community", label: "ชุมชน", path: "/community" },
      ],
    },
  ],
} as const

// ============================================================================
// APP SETTINGS & CONFIGURATION
// ============================================================================
export const SETTINGS = {
  // App Behavior
  app: {
    autoSave: true,
    autoUpdate: true,
    notifications: true,
    sound: true,
    vibration: true,
    darkMode: "auto", // "light" | "dark" | "auto"
    language: "th",
    timezone: "Asia/Bangkok",
    currency: "THB",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "24h", // "12h" | "24h"
  },
  
  // Gaming Settings
  gaming: {
    autoPlay: false,
    soundEffects: true,
    backgroundMusic: false,
    chatEnabled: true,
    privateChat: true,
    publicChat: true,
    emojiEnabled: true,
    autoLogout: 30, // minutes
    sessionTimeout: 60, // minutes
    maxBet: 10000,
    minBet: 10,
    maxWin: 1000000,
  },
  
  // Display Settings
  display: {
    theme: "auto", // "light" | "dark" | "auto"
    fontSize: "medium", // "small" | "medium" | "large"
    animationSpeed: "normal", // "slow" | "normal" | "fast"
    showTutorial: true,
    showTips: true,
    showNotifications: true,
    showAds: false,
    showPromotions: true,
  },
  
  // Privacy Settings
  privacy: {
    profileVisibility: "public", // "public" | "friends" | "private"
    showOnlineStatus: true,
    showLastSeen: true,
    allowFriendRequests: true,
    allowMessages: true,
    allowInvites: true,
    shareGameHistory: false,
    shareAchievements: true,
  },
} as const

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Get text by key (dot notation)
export function getText(key: string): string {
  const keys = key.split(".")
  let value: any = TEXT
  
  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Text key not found: ${key}`)
      return key
    }
    value = value[k]
  }
  
  return value
}

// Get menu item by ID
export function getMenuItem(menuType: keyof typeof MENU, itemId: string) {
  const menu = MENU[menuType]
  
  for (const item of menu) {
    if (item.id === itemId) return item
    if (item.children) {
      const child = item.children.find(child => child.id === itemId)
      if (child) return child
    }
  }
  
  return null
}

// Get link by category and key
export function getLink(category: keyof typeof LINKS, key: string): string {
  const links = LINKS[category]
  return links[key as keyof typeof links] || "#"
}

// Get setting value
export function getSetting(category: keyof typeof SETTINGS, key: string): any {
  const settings = SETTINGS[category]
  return settings[key as keyof typeof settings]
}

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
export type AppConfig = typeof APP_CONFIG
export type Links = typeof LINKS
export type Text = typeof TEXT
export type Menu = typeof MENU
export type Settings = typeof SETTINGS

// Menu item types
export interface MenuItem {
  id: string
  label: string
  path: string
  icon?: string
  children?: MenuItem[]
}

// Export all configurations
export default {
  APP_CONFIG,
  LINKS,
  TEXT,
  MENU,
  SETTINGS,
  getText,
  getMenuItem,
  getLink,
  getSetting,
}
