# TravelBook

뉴질랜드 남섬 여행 일정 페이지 (2026-10-21 ~ 10-30, 9박 10일, 2인)

- 페이지: https://mechenginee.github.io/TravelBook/ (GitHub Pages)
- `index.html`에 CSS·JS가 모두 들어 있고, 사진은 `photos/` 폴더에 있습니다.
- `sw.js`(서비스 워커)가 페이지와 사진을 저장해 두므로, 한 번 열어두면 인터넷 없이도 사진까지 보입니다.
- 일정을 고칠 때는 `index.html`의 `<script>` 위쪽 데이터 블록(`TRIP`, `FLIGHTS`, `DAYS`, `ACTIVITIES`, `EXTRAS`, `CHECKLIST`, `PHOTOS`, `HOTELS`, `MAP_POINTS`, `MAP_ROUTE`, `PLAN_B`, `NOTES`)만 수정하면 됩니다.
- 일정 카드의 사진은 Wikimedia Commons의 자유 라이선스 사진입니다 (크기만 줄임). 작가·라이선스는 각 사진 아래에 표시되고, 누르면 원본 페이지로 이동합니다.
- 동선 지도는 Natural Earth(퍼블릭 도메인) 해안선·호수 데이터로 그린 SVG라 지도 타일 없이 오프라인에서도 보입니다.
