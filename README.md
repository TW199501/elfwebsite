# 一路發集運網 - AI智能集運平台

## 🚀 專案概述

一路發集運網是一個現代化的AI智能集運平台，提供全球購物集運服務，支援多國商品代購與快速配送到台灣。採用React 19 + TypeScript + Tailwind CSS技術棧，具備響應式設計、多主題切換功能與國際化支援。

## 📋 目錄

- [技術架構](#技術架構)
- [功能特色](#功能特色)
- [專案結構](#專案結構)
- [建置與部署](#建置與部署)
- [開發指南](#開發指南)
- [響應式設計](#響應式設計)
- [主題系統](#主題系統)
- [國際化系統](#國際化系統)
- [組件架構](#組件架構)
- [狀態管理](#狀態管理)
- [效能優化](#效能優化)

## 🏗️ 技術架構

### 核心技術棧
```
Frontend Framework: React 19.0.0 (最新版本)
Language: TypeScript 5.5.3
Build Tool: Vite 5.4.2
Styling: Tailwind CSS 3.4.1
Icons: Lucide React 0.344.0
```

### 開發工具
```
Linting: ESLint 9.9.1
Type Checking: TypeScript ESLint 8.3.0
CSS Processing: PostCSS 8.4.35 + Autoprefixer 10.4.18
Headless UI: @headlessui/react 2.2.4  UI
Lucide React: lucide-react 0.468.0    ICON
```

### 環境需求
```
Node.js: 20.0.0+ (建議使用最新 LTS 版本)
npm: 10.0.0+
```

### 瀏覽器支援
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- 移動端瀏覽器支援

## ✨ 功能特色

### 🌍 國際化支援 (i18n)
- **多語言支援**: 英文、繁體中文、簡體中文
- **動態載入**: 按需載入語言檔案，減少初始包大小
- **智能檢測**: 自動檢測瀏覽器語言並映射到對應語言
- **語言切換**: 即時切換語言，無需重新載入頁面
- **類型安全**: TypeScript 支援，確保翻譯鍵值的正確性
- **檔案規範**: 使用 `i18n` 資料夾，檔案名稱統一小寫 (en.ts, zh-tw.ts, zh-cn.ts)


### 🎨 多主題系統
- **白色主題**: 淘寶風格，純白背景 + 橘紅色主題
- **橘色主題**: 深色版本，橘色漸層配色
- **藍色主題**: 科技風格，藍色漸層配色
- 主題狀態持久化存儲

### 📱 響應式設計
- **桌面版**: 傳統導航欄 + 網格布局
- **移動版**: 底部導航 + 瀑布流布局
- 斷點設置: 1024px (平板和手機使用移動版)

### 🛍️ 購物功能
- 商品瀏覽與搜尋
- 分類篩選與排序
- 購物車管理
- 收藏功能
- 無限滾動加載

### 🔐 用戶系統
- 多種登入方式 (信箱/手機/生物識別)
- 註冊流程與驗證
- 密碼強度檢測
- 社交登入整合

### 🌏 國際化支援
- 多國館別 (韓國/日本/美國/德國)
- 匯率計算功能
- 多語言界面支援

## 📁 專案結構

```
src/
├── components/              # React 組件
│   ├── desktop/            # 桌面版組件
│   │   ├── HomePageDesktop.tsx
│   │   ├── KoreaHallDesktop.tsx
│   │   ├── LoginPageDesktop.tsx
│   │   ├── RegisterPageDesktop.tsx
│   │   ├── DesktopHeader.tsx
│   │   └── DesktopFooter.tsx
│   ├── mobile/             # 移動版組件
│   │   ├── HomePageMobile.tsx
│   │   ├── KoreaHallMobile.tsx
│   │   ├── LoginPageMobile.tsx
│   │   ├── RegisterPageMobile.tsx
│   │   ├── MobileHeader.tsx
│   │   └── MobileSearchBar.tsx
│   ├── shared/             # 共用組件
│   │   ├── BottomNavigation.tsx
│   │   └── ProductCard.tsx
│   ├── HomePageRouter.tsx  # 路由組件
│   ├── KoreaHallRouter.tsx
│   ├── LoginPageRouter.tsx
│   ├── RegisterPageRouter.tsx
│   ├── ThemeToggle.tsx     # 主題切換
│   ├── LanguageToggle.tsx  # 語言切換
│   └── LoadingScreen.tsx   # 載入畫面
├── contexts/               # React Context
│   ├── ThemeContext.tsx    # 主題管理
│   └── I18nContext.tsx     # 國際化管理
├── i18n/                  # 國際化翻譯檔案 (符合規範)
│   ├── en.ts              # 英文翻譯
│   ├── zh-tw.ts           # 繁體中文翻譯 (小寫檔名)
│   ├── zh-cn.ts           # 簡體中文翻譯 (小寫檔名)
│   └── index.ts           # 載入器與配置
├── hooks/                 # 自定義 Hooks
│   └── useIsMobile.ts     # 響應式檢測
├── types/                 # TypeScript 類型定義
│   └── index.ts
├── utils/                 # 工具函數
│   └── constants.ts
├── App.tsx               # 主應用組件
├── main.tsx             # 應用入口點
├── index.css            # 全域樣式
└── vite-env.d.ts        # TypeScript 類型定義

public/
├── index.html           # HTML 模板
└── vite.svg            # 應用圖標

配置檔案:
├── package.json         # 專案依賴與腳本
├── tsconfig.json        # TypeScript 配置
├── tailwind.config.js   # Tailwind CSS 配置
├── postcss.config.js    # PostCSS 配置
├── vite.config.ts       # Vite 建置配置
└── eslint.config.js     # ESLint 規則配置
```

## 🔧 建置與部署

### 環境需求
```bash
Node.js: 20.0.0+ (建議使用最新 LTS 版本)
npm: 10.0.0+
```

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
# 啟動開發伺服器，預設端口 5173
# 支援熱重載與即時預覽
# 自動檢測瀏覽器語言並載入對應翻譯
```

### 建置生產版本
```bash
npm run build
# 輸出到 dist/ 目錄
# 自動優化與壓縮
# 語言檔案按需分割載入
# React 19 優化建置
```

### 預覽生產版本
```bash
npm run preview
# 本地預覽建置後的版本
```

### 程式碼檢查
```bash
npm run lint
# 執行 ESLint 檢查
# 自動修復可修復的問題
```

### 部署建議
```bash
# 靜態網站部署
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

# 伺服器部署
- Nginx
- Apache
- Docker 容器化
```

## 💻 開發指南

### React 19 新特性
1. **自動批次處理**: 所有狀態更新自動批次處理，提升效能
2. **並發功能**: 更好的用戶體驗和響應性
3. **Suspense 改進**: 更好的載入狀態管理
4. **Server Components**: 為未來 SSR 做準備

### 組件開發原則
1. **響應式優先**: 使用 Router 組件自動切換桌面/移動版
2. **國際化支援**: 所有文字內容使用 `t()` 函數進行翻譯
3. **類型安全**: 使用 TypeScript 確保類型安全
4. **模組化設計**: 桌面版和移動版組件分離

### 程式碼規範
```typescript
// 組件命名: PascalCase
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Hook 使用
  const [isLoading, setIsLoading] = useState(false);
  const { getThemeColors } = useTheme();
  const { t } = useI18n();
  
  // 事件處理
  const handleClick = useCallback(() => {
    // 處理邏輯
  }, []);
  
  return (
    <div className="component-styles">
      <h1>{t('common.title')}</h1>
    </div>
  );
};
```

### 樣式規範
```css
/* Tailwind CSS 類別順序 */
className="
  /* 布局 */
  flex items-center justify-center
  /* 尺寸 */
  w-full h-12
  /* 間距 */
  p-4 m-2
  /* 背景與邊框 */
  bg-white border border-gray-200 rounded-lg
  /* 文字 */
  text-gray-900 font-medium
  /* 效果 */
  shadow-md hover:shadow-lg
  /* 動畫 */
  transition-all duration-300
"
```

## 📱 響應式設計

### 斷點策略
```typescript
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return isMobile;
};
```

### 組件路由系統
```typescript
// 自動切換桌面/移動版組件
const HomePageRouter: React.FC = ({ onPageChange }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HomePageMobile onPageChange={onPageChange} />
  ) : (
    <HomePageDesktop onPageChange={onPageChange} />
  );
};
```

## 🎨 主題系統

### 主題配置
```typescript
interface ThemeColors {
  primary: string;        // 主要色彩
  secondary: string;      // 次要色彩
  accent: string;         // 強調色彩
  gradient: string;       // 漸層配色
  textGradient: string;   // 文字漸層
  bgColor: string;        // 背景色彩
  textColor: string;      // 文字色彩
  cardBg: string;         // 卡片背景
  borderColor: string;    // 邊框色彩
}
```

### 主題使用
```typescript
const { theme, toggleTheme, getThemeColors } = useTheme();
const colors = getThemeColors();

// 使用主題色彩
<div className={`${colors.cardBg} ${colors.textColor}`}>
  <h1 className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
    {t('header.title')}
  </h1>
</div>
```

## 🌍 國際化系統

### 語言檔案結構 (符合規範)
```
src/i18n/              # 使用 i18n 資料夾名稱
├── en.ts              # 英文翻譯檔案 (小寫)
├── zh-tw.ts           # 繁體中文翻譯檔案 (小寫)
├── zh-cn.ts           # 簡體中文翻譯檔案 (小寫)
└── index.ts           # 載入器和配置
```

### 動態載入機制
```typescript
// 按需載入語言檔案 (使用小寫檔名)
export const loadLocale = async (language: Language): Promise<Record<string, string>> => {
  switch (language) {
    case 'en':
      const enModule = await import('./en');
      return enModule.default;
    case 'zh-TW':
      const zhTWModule = await import('./zh-tw');  // 小寫檔名
      return zhTWModule.default;
    case 'zh-CN':
      const zhCNModule = await import('./zh-cn');  // 小寫檔名
      return zhCNModule.default;
    // ...
  }
};
```

### 翻譯使用
```typescript
const { t, language, setLanguage } = useI18n();

// 基本翻譯
<h1>{t('header.title')}</h1>

// 帶參數翻譯
<p>{t('verification.subtitle', { phone: '0912345678' })}</p>

// 語言切換
<button onClick={() => setLanguage('en')}>
  Switch to English
</button>
```

### 智能語言檢測
```typescript
// 瀏覽器語言映射
browserLanguageMap: {
  'zh-TW': ['zh-TW', 'zh-Hant', 'zh-HK', 'zh-MO'],
  'zh-CN': ['zh-CN', 'zh-Hans', 'zh-SG', 'zh'],
  'en': ['en', 'en-US', 'en-GB', 'en-AU', 'en-CA']
}
```

## 🧩 組件架構

### 路由組件系統
- **Router 組件**: 負責桌面/移動版切換
- **Desktop 組件**: 桌面版專用組件
- **Mobile 組件**: 移動版專用組件
- **Shared 組件**: 共用組件

### 組件通信
```typescript
// Props 傳遞
interface ComponentProps {
  onBack: () => void;
  onPageChange: (page: PageType) => void;
}

// Context 共享
const { theme, getThemeColors } = useTheme();
const { t, language } = useI18n();
```

## 🔄 狀態管理

### Context 系統
```typescript
// 主題管理
const ThemeContext = createContext<ThemeContextType>();

// 國際化管理
const I18nContext = createContext<I18nContextType>();

// 組合使用 (React 19 優化)
function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </I18nProvider>
  );
}
```

### 狀態持久化
```typescript
// 主題持久化
useEffect(() => {
  localStorage.setItem('theme', theme);
}, [theme]);

// 語言持久化
useEffect(() => {
  localStorage.setItem('language', language);
}, [language]);
```

## ⚡ 效能優化

### React 19 效能特性
```typescript
// 自動批次處理 (React 19 內建)
const handleMultipleUpdates = () => {
  setCount(c => c + 1);
  setName('New Name');
  setEmail('new@email.com');
  // 這些更新會自動批次處理
};

// 並發功能
const [isPending, startTransition] = useTransition();

const handleSearch = (query: string) => {
  startTransition(() => {
    setSearchResults(performSearch(query));
  });
};
```

### 程式碼分割
```typescript
// 動態導入語言檔案 (小寫檔名)
const loadLocale = async (language: Language) => {
  const module = await import(`./i18n/${language.toLowerCase()}`);
  return module.default;
};

// 組件懶加載
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

### 載入狀態管理
```typescript
// 語言載入狀態
const [isLoading, setIsLoading] = useState(true);

// 載入畫面
if (isLoading) {
  return <LoadingScreen />;
}
```

### 記憶化優化
```typescript
// useCallback 優化
const handleLanguageChange = useCallback((lang: Language) => {
  setLanguage(lang);
}, [setLanguage]);

// useMemo 優化
const translatedCategories = useMemo(() => {
  return getCategories(t);
}, [t]);
```

## 🔮 未來規劃

### 功能擴展
- [ ] 更多語言支援 (日文、韓文、德文等)
- [ ] PWA 支援
- [ ] 離線翻譯功能
- [ ] 語音搜尋多語言支援
- [ ] RTL 語言支援

### 技術升級
- [x] React 19 升級 ✅
- [x] i18n 資料夾規範化 ✅
- [x] 檔案名稱小寫統一 ✅
- [ ] 狀態管理庫 (Zustand/Redux Toolkit)
- [ ] 測試框架 (Vitest/Testing Library)
- [ ] 端到端測試 (Playwright)
- [ ] 性能監控 (Web Vitals)

### React 19 特性應用
- [ ] Server Components 整合
- [ ] 並發渲染優化
- [ ] Suspense 邊界改進
- [ ] 自動批次處理優化

### 國際化優化
- [x] 符合 i18n 規範的資料夾結構 ✅
- [x] 檔案名稱統一小寫 ✅
- [ ] 翻譯管理平台整合
- [ ] 自動翻譯 API 整合
- [ ] 翻譯品質檢測
- [ ] 多語言 SEO 優化
- [ ] 地區化內容管理

## 📞 聯絡資訊

- **專案維護**: 一路發集運網開發團隊
- **技術支援**: 請提交 Issue 或 Pull Request
- **商務合作**: 請聯繫客服團隊

---

**版本**: 2.2.0  
**最後更新**: 2024年12月  
**授權**: MIT License  
**Node.js 版本**: 20.0.0+  
**React 版本**: 19.0.0  
**i18n 規範**: 符合國際化標準，使用小寫檔名