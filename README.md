# Bundler
## parcel이란?
Parcel은 개발 경험에서 차이를 느낄수 있는 웹 애플리케이션 번들러이다.

### 설치하기
```bash
npm install -D parcel-bundler
```

### package.json 파일 만들기 
```bash
npm init -y
```

### Parcel의 원리
Parcel 은 파일 변화를 자동으로 다시 빌드(rebuild) 하고 빠른 모듈 교체를 지원하는 내장 개발용 서버가 있어 빠른 개발이 가능해진다. package.json파일에 진입 파일을 지정하면 된다.
```html
"dev":"parcel index.html",
"build":"parcel build index.html"
```