# Next.js（SSG）× Docker × TailwindCSSで作るPreview機能付きヘッドレスWordpressサイト
## リポジトリのクローン:

```bash
git clone git@github.com:joe-main/next-wp-headless.git
```

## (注意)M1Mac利用の場合は以下を修正:
```json
  "dependencies": {
    "@heroicons/react": "^1.0.6",
    "@next/swc-linux-x64-gnu": "^11.1.2", // この行を削除
  ...
  }
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
![スクリーンショット 2022-05-14 8 18 54](https://user-images.githubusercontent.com/87892265/168400542-0836755f-4a67-4d48-83e5-0dd6d9151ff9.png)

 Next記事詳細画面：`localhost:3030`

![スクリーンショット 2022-05-14 8 19 04](https://user-images.githubusercontent.com/87892265/168400587-c24d8fcc-9626-462b-804d-ead149db8f64.png)

## プレビュー機能

wordpressの投稿一覧 or 記事修正画面のプレビューボタンを押下。

![スクリーンショット 2022-05-14 8 33 52](https://user-images.githubusercontent.com/87892265/168401405-232b3533-87c9-4c7b-a2fb-1674b7dd9c8f.png)

Next.jsのフロントにリダイレクトされ編集内容が表示。

![スクリーンショット 2022-05-14 8 40 13](https://user-images.githubusercontent.com/87892265/168401736-75b1cad7-e008-4f09-b4a1-dceb29ed48ad.png)