# CORPO : COndominium Repair Plan Optimizer
![tktIsDQN](https://img.shields.io/badge/tkt-DQN-red.svg)

Programmer : JotaroS

## インストール方法 (ひとまず実行してみる)

### nodejsのインストール
自身のPCにjavascriptによるwebフレームワークのnodejsがインストールされていることを確認する。
されていなかったらターミナルで `brew install node`なりでインストール。

`node --version`

でバージョンを確認。本アプリは `node v 7.1.0`で動作確認。

### npmパッケージのインストール
本アプリに必要なnodejsの周辺ライブラリ・モジュールは、nodejsが提供するパッケージマネージャ `npm` によって管理されている。利用するパッケージの一覧は　`package.json`にすでに記述されている。
ターミナルに`npm install` と打つことで、 `node_modules`フォルダが生成されて周辺パッケージがその中に全部入る。

webpackとwebpack-dev-serverはグローバル環境にもインストールしておく必要がある。

`npm install -g webpack`
`npm install -g webpack-dev-server`



### 開発用の実行
`npm run server`を実行(package.jsonにコマンドの内容がある)。

ブラウザで `localhost:8080/webpack-dev-server/index.html`にアクセスすると実行画面が表示される。

ブラウザの内容はファイルが更新されると自動的にリフレッシュされるようになっている。

### bundle.jsの生成
このアプリは `public/bundle.js`に、全てのjsファイルがES5形式のjavascriptコードにコンパイルされて出力される。
`npm run production`で`bundle.js`を生成する。

### サーバ用の実行
`node server.js`を実行。実際のサーバで実行されるコマンド。

## Webアプリの構成

### ホームページの作り方

HTML+CSS+Javascriptを利用してWebページを作成できる。

#### HTML
通常、全てのWebページはHTMLと言われる言語で記述されている。

```html
<html>
<head>
	<title>
		タイトル
	</title>
</head>
<body>
	<h1>タイトル</h1>
	<p>内容...</p>
	<img src = "./img/zoi.png" alt = "がんばるぞい.png" />
</body>
</html>
```

このようにHTMLは静的な構造を定義するものである。

#### javascript
ホームページの内容が動的に変化する場合、例えばリアルタイムな時系列データが挿入されたりする場合は、javascriptで挙動を記述する。`<script>`タグに記述できるが、普通外部ファイルを読み込む。

```html
<html>
<head>
	<title>
		タイトル
	</title>
</head>
<body>
	<script>

		//今日の日付データを変数hidukeに格納
		var hiduke=new Date(); 

		//年・月・日・曜日を取得する
		var year = hiduke.getFullYear();
		var month = hiduke.getMonth()+1;
		var week = hiduke.getDay();
		var day = hiduke.getDate();

		var yobi= new Array("日","月","火","水","木","金","土");

		document.write("西暦"+year+"年"+month+"月"+day+"日 "+yobi[week]+"曜日");

	</script>
</body>
</html>
```

#### CSS 
`style.css`のようなファイルを用意しておき、各HTMLタグに対応する要素の見た目を変更できる。
```
p {
    color : blue ;
    line-height : 1.5 ;
}
```
今回のプロジェクトはBootstrapが提供するCSSを利用している。CDNサービスによって、ネットワーク上に公開されているスタイルを読み込んで利用している。

#### Webサーバ
3つのファイルを用意して記述すればローカルでは実行可能だが、リモート環境下で実行したり、データベースやリクエストに応じた動作（サーバサイドスクリプトとの連携）をするためには、Webサーバが必要。
nodejsとかもWebサーバ。NginxやApacheなどもよく使われている。


### React.jsについて
ReactはFacebookが開発したjavascirptフレームワーク。__ほとんどHTMLファイルを書かずにJavascriptのみでWebサイト開発ができる。__HTMLのタグなどの「要素」を自分で定義できて、組み合わせたりすることができる。`Tktxxxx.js`は全部Reactのコンポーネント。詳細は公式ホームページのチュートリアルで。


---
English

## installation
(Developed under `node v 7.1.0`)

` npm install `

## deploy

` node server.js `

## develop

` node run server `

Then access ` localhost:8080/webpack-dev-server/index.html ` on your brower
