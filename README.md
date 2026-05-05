# Web Ledger（家計簿アプリ）

## 概要
React、Node.js、MySQLを用いて開発した家計簿アプリです。  
カレンダーUIを基に、日付ごとの収入・支出を管理できるように設計しました。  
実際にフロントエンドとバックエンドを連携させたWebアプリケーションとして開発しました。

---

## デモ画面

### カレンダー画面
<img src="https://github.com/user-attachments/assets/59c5fc32-24dc-4adf-9dc5-5b88207275de" width="900" />

### データ管理（モーダル）
<img src="https://github.com/user-attachments/assets/af4066c7-a564-4ab1-bb79-2515a66fb1a0" width="900" />

---

## 使用技術
- Frontend: React (useState, useEffect)
- Backend: Node.js (Express)
- Database: MySQL（Docker）
- その他: REST API

---

## 主な機能
- 日付ごとの収支データの追加
- データの削除
- カレンダー上でのデータ表示
- フロントエンドとバックエンドの連携

---

## アーキテクチャ
React（フロントエンド）からExpress（バックエンド）のREST APIを通じて、  
MySQLデータベースと通信する構成になっています。

---

## データベース設計
- user（user_ID, user_Name, email）
- ledger（ledger_ID, ledger_date, ledger_title, ledger_content, amount, user_ID）

---

## 工夫した点
- カレンダーUIとデータベースを連携し、直感的に操作できるように設計しました
- REST APIを通じてフロントエンドとバックエンドの役割を分離しました
- Dockerを利用してローカル環境でのデータベース管理を行いました

---

## 学んだこと
- フロントエンドとバックエンドの連携方法
- API設計とデータ通信の流れ
- データベース設計（ERD）とSQLの活用
- Dockerを利用した開発環境構築

---

## 実行方法

本プロジェクトはDockerを利用してMySQLデータベースを構築しています。

### データベース
DockerでMySQLコンテナを起動してください。

### フロントエンド
npm install  
npm start  
→ http://localhost:3000 で確認できます

### バックエンド
node server.js  
→ http://localhost:5000 でAPIが動作します

※Docker環境がない場合は、ローカルのMySQLでも動作可能です。

---

## 今後の改善点
- ユーザー認証機能の追加（ログイン機能）
- UI/UXの改善
- データの編集機能の追加
