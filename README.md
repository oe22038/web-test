# web-test

# Docker
### 初回ビルド

```
docker compose up --build
```
プロジェクトのルートで実行

### 起動（バックグラウンド）
```
docker compose up -d
```

### 停止
```
docker compose down
```

### DB確認
```
docker exec -it webapp-postgres psql -U postgres
SELECT * FROM users
```

※ `\q`で終了