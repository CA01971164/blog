# ベースイメージ
FROM node:alpine as build-stage

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係ファイルのコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# アプリケーションのビルド
RUN npm run build

# 本番ステージ
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
