# CORPO : COndominium Repair Plan Optimizer
![tktIsDQN](https://img.shields.io/badge/tkt-DQN-red.svg)

Programmer : JotaroS

## インストール方法

### nodejsのインストール
自身のPCにjavascriptによるwebフレームワークのnodejsがインストールされていることを確認する。
されていなかったらターミナルで `brew install node`なりでインストール。

`node --version`

でバージョンを確認。本アプリは `node v 7.1.0`で動作確認。

### npmパッケージのインストール
本アプリに必要なnodejsの周辺ライブラリ・モジュールは、nodejsが提供するパッケージマネージャ `npm` によって管理されている。利用するパッケージの一覧は　`package.json`にすでに記述されている。
ターミナルに`npm install` と打つことで、 `node_modules`フォルダが生成されて周辺パッケージがその中に全部入る。

### 開発用の実行
`npm run server`を実行(package.jsonにコマンドの内容がある)。

ブラウザで `localhost:8080/webpack-dev-server/index.html`にアクセスすると実行画面が表示される。

ブラウザの内容はファイルが更新されると自動的にリフレッシュされるようになっている。

### 開発用の



---

## installation
(Developed under `node v 7.1.0`)

` npm install `

## deploy

` node server.js `

## develop

` node run server `

Then access ` localhost:8080/webpack-dev-server/index.html ` on your brower
