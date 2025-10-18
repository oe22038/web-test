# web-test

# Docker
### 初回ビルド

```
docker compose up --build -d
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
docker exec -it db psql -U user -d postgres
```
`postgres=#`と表示されればOK．`Ctrl + D`で終了．

- DB一覧を表示
    > `\dt`

- DB（`users`）の全データを表示
    > `SELECT * FROM users;`