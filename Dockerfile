# Bulid
FROM node:25 AS builder

# 作業ディレクトリを指定する
WORKDIR /app

# 依存関係をインストールする
COPY package*.json ./
RUN npm ci

# ソースコードをコピーする
COPY . .

# Viteでビルドする
RUN npm run build


# Production
FROM nginx:1.29.3

# ビルドしたファイルをコピーする
COPY --from=builder /app/dist /usr/share/nginx/html

# コンテナを起動する
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]