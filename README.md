# Pixel Weather Town

React + TypeScript + Vite + Phaser 製作的像素生態觀察箱。地圖與角色素材皆由 Phaser 在執行時程序化繪製，因此 clone 後不需另找圖包即可運作。

## 本機啟動

```bash
npm install
cp .env.example .env
npm run dev
```

OpenWeather API Key 非必填。未設定時使用展示天氣，時間與 NPC 行程仍依瀏覽器本地時間運作。

## 天氣設定

編輯 `.env`：

```env
VITE_OPENWEATHER_API_KEY=你的金鑰
VITE_WEATHER_LAT=25.0330
VITE_WEATHER_LON=121.5654
```

注意：純前端網站無法安全隱藏 API Key。GitHub Actions Secret 只會避免金鑰出現在原始碼庫，但編譯後仍可在瀏覽器網路請求中看到。正式公開站建議改用允許網域限制的金鑰或無金鑰天氣 API。

## GitHub Pages

1. 建立 GitHub repository，將本專案推送至 `main`。
2. Repository Settings → Pages → Source 選擇 `GitHub Actions`。
3. Settings → Secrets and variables → Actions：
   - Secret: `VITE_OPENWEATHER_API_KEY`
   - Variables: `VITE_WEATHER_LAT`, `VITE_WEATHER_LON`
4. Push 後 workflow 會自動 build 與 deploy。

`vite.config.ts` 使用相對 base `./`，可部署在任意 repository 名稱下。

## 架構重點

- `WorldStore`：唯一世界狀態與 LocalStorage 邊界
- `TimeSystem`：真實本地時間
- `WeatherSystem`：OpenWeather 輪詢與展示模式降級
- `NPCSystem`：20 位居民、狀態機、日程與渲染
- `RenderSystem`：40×40 地圖、房屋、商店、酒館、河流、樹木、雨、燈光
- `NewsSystem`：每日模板日報
- React 僅負責 HUD，Phaser 專注世界渲染

## 操作展示天氣

未提供 API Key 時預設晴天。若要測試其他效果，可暫時在 `WorldStore.ts` 將初始 `weather` 改為 `Rain` 或 `Thunderstorm`。
