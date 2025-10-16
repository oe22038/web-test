# ベースイメージ
FROM node:20

# 作業ディレクトリ
WORKDIR /app

# 依存関係をコピー＆インストール
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# 全体のコードをコピー
COPY . .

# ポート開放
EXPOSE 3000

# 起動コマンド
CMD ["node", "backend/server.js"]
