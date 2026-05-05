# Web Ledger（家計簿アプリ）

## 概要
React、Node.js、MySQLを用いて開発した家計簿アプリです。  
カレンダーUIを基に、日付ごとの収入・支出を管理できるように設計しました。

## 使用技術
- Frontend: React (useState, useEffect)
- Backend: Node.js (Express)
- Database: MySQL（Docker）
- その他: REST API

## 主な機能
- 日付ごとの収支データの追加
- データの削除
- カレンダー上でのデータ表示
- フロントエンドとバックエンドの連携

## 工夫した点
- カレンダーUIとデータベースを連携し、直感的に操作できるように設計しました
- REST APIを通じてフロントとバックエンドの役割を分離しました
- Dockerを利用してローカル環境でのデータベース管理を行いました

## 学んだこと
- フロントエンドとバックエンドの連携方法
- API設計とデータ通信の流れ
- データベース設計（ERD）とSQLの活用
- Dockerを利用した開発環境構築

## 今後の改善点
- ユーザー認証機能の追加（ログイン機能）
- UI/UXの改善
- データの編集機能の追加

## GitHub
https://github.com/gyusik6312/web_Ledger
