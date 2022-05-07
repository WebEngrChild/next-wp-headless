# Next.js（SSG）× Dockerで作るヘッドレスWordpressサイト
## リポジトリのクローン:

```bash
git clone git@github.com:joe-main/next-wp-headless.git
```

## Docker Container起動:

```bash
docker-compose up -d
```

## Wordpress初期設定:
`localhost:8080`アクセス後に以下を設定。

### 1. ユーザー登録
* 必要情報を適宜入力
![スクリーンショット 2022-05-07 10 10 22](https://user-images.githubusercontent.com/87892265/167232092-e6932d5f-2df9-43a7-93e4-622c97d90168.png)

### 2. RESTAPIの初期設定
* パーマリンク設定を投稿名に変更:
![スクリーンショット 2022-05-07 10 27 45](https://user-images.githubusercontent.com/87892265/167232568-e4f295b7-2a36-400f-a091-3d8ec7621e21.png)

* アプリケーションパスワードを設定:
  * パスワードは必ずコピーしておくこと。
  * 間にある半角空白は不要です

![スクリーンショット 2022-05-07 10 17 51](https://user-images.githubusercontent.com/87892265/167232366-6cb17abf-c758-47b4-b761-159f3aa8a83e.png)

## Next.jsフロント初期設定:
 `.env.local`の作成:

  ```bash
  cp .env.example .env.local 
  ```

  ```bash
  # 上記で登録したユーザー名
  WP_USER=
  # 上記で登録したアプリケーションパスワード（半角空白は削除）
  WP_AP_PASS=
  ```  

## アプリケーション起動:
  ```bash
  make start
  ```
  Wordpress管理画面：`localhost:8080/admin`

  Next記事一覧画面：`localhost:3030`

## プレビュー機能

wordpressの投稿一覧 or 記事修正画面のプレビューボタンを押下。

Next.jsのフロントにリダイレクトされ編集内容が表示。