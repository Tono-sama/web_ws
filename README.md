# web_ws
wsb開発

## ロードマップ
- https://github.com/kamranahmedse/developer-roadmap.git

## HTML
- html_test
- アウトライン確認
    - https://gsnedders.html5.org/outliner/

## CSS
- css_test
- css サンプル
    - https://saruwakakun.com/html-css/reference/h-design

## JavaScript
- js_test

## React
- https://ja.reactjs.org/tutorial/tutorial.html
- CRA
    - 新規プロジェクトのスケルトンを作成してくれる
        - npx create-react-app (project name) --template=typescript
    - 実行(ブラウザを開いて編集内容を逐次更新して表示)
        - cd (project name)
        - yarn start

### test006
- API使用テスト
    - axiosを使ってAPI呼び出し
- (useStateの初期値をいい感じに設定しておかないとその後の非同期処理の時にエラーを吐く？)

## web_app_test
- web全体の連携確認
    - とりあえずバックエンド・フロントエンド間
    - いずれはDBも含めたい
        - バックエンドの言語はtypeScript？

### test001
- バックエンド・フロントエンド間でjson取得できることを確認

## 言語バージョン管理
- anyenv
- exec $SHELL -l
- yarn
    - yarn upgrade-interactive [--latest]
        - package.jsonの依存パッケージの最新バージョンインストール、package.jsonも上書き

## ブラウザのショートカットキー
- ctrl + u
    - 表示中のページのhtmlソースコードを新規タブで表示

## practiceフォルダ内に動作確認用フォルダ移動