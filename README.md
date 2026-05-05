# Web Ledger（家計簿アプリ）

## 概要
React、Node.js、MySQLを用いて開発した家計簿アプリです。  
カレンダーUIを基に、日付ごとの収入・支出を管理できるように設計しました。  
実際に動作するWebアプリケーションとして開発しました。

---

## デモ画面

### カレンダー画面
![calendar]![Uploading 스크린샷 2026-05-05 173957.png…]()


### データ管理（モーダル）
![modal]<img width="2543" height="1403" alt="스크린샷 2026-05-05 173953" src="https://github.com/user-attachments/assets/af4066c7-a564-4ab1-bb79-2515a66fb1a0" />


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
React（フロントエンド）からExpress（バックエンド）のREST APIを通じて  
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

### バックエンド
node server.js  

※Docker環境がない場合は、ローカルのMySQLでも動作可能です。

---

## 今後の改善点
- ユーザー認証機能の追加（ログイン機能）
- UI/UXの改善
- データの編集機能の追加
