# ベースイメージ
FROM node:20

# 作業ディレクトリ
WORKDIR /app/backend

# 依存関係をコピー＆インストール
COPY package*.json ./

# 全体のコードをコピー
COPY . .

# ポート開放
EXPOSE 3000

# 起動コマンド
CMD ["node", "server.js"]
