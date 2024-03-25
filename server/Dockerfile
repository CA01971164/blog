# ベースイメージ
FROM node:alpine

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# 依存関係ファイルのコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# アプリケーションの起動
CMD [ "node", "dist/server.js" ]
