# MinChan's Archive

HTML 웹앱을 카드로 모아 여는 GitHub Pages용 마스터페이지입니다.

## 시작

`index.html`을 브라우저에서 열면 보관함을 확인할 수 있습니다.
`guide.html`에 한국어 배포 및 앱 추가 안내가 들어 있습니다.

## 배포

이 폴더 **안의 파일과 apps 폴더**를 GitHub 저장소 루트에 업로드합니다.
Settings → Pages에서 Deploy from a branch → main → /(root) → Save를 선택합니다.
Pages 화면에 표시되는 주소가 실제 사이트 주소입니다.

## 앱 추가

1. `apps/앱이름/index.html`에 앱을 저장합니다.
2. 필요한 CSS, JavaScript, 이미지를 함께 저장합니다.
3. `apps.js`의 목록에 앱 이름, 설명, 경로를 추가합니다.
4. GitHub에 변경 내용을 저장하고 배포 완료 후 새로고침합니다.

앱 경로에는 앞쪽 슬래시 없이 `apps/calculator/index.html`처럼 상대 경로를 사용하세요.
파일만 업로드하면 목록에 자동 등록되지는 않습니다.

GitHub Pages는 정적 웹사이트 호스팅입니다. 방문자가 입력한 데이터의 서버 저장이나 파일 업로드 기능은 포함되어 있지 않습니다. 공개 파일에 비밀번호나 비밀 키를 넣지 마세요.

공식 문서: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 과목별 주소 등록
스프레드시트의 배포된 웹앱 주소를 apps.js의 path에 붙여 넣으세요. category는 사회 또는 역사입니다. 시트의 변경은 자동 반영되지 않습니다.

현재 웹사이트: https://alex6401.github.io/Alex/
모의선거 앱: https://alex6401.github.io/Alex/election-lab.html
모의선거 진행 상태는 해당 브라우저에 저장되며 여러 기기에서 동기화되지 않습니다.
