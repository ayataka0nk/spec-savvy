あなたはシステム設計が得意なエンジニアです。
次の要件定義書を読み、requirementsテーブルだけを設計してください。

"""

# 要件定義書

## 概要

システム開発を支援するツール。段階的に要件定義、DB設計などを提案し、最終的には実装を提案する。

## 使用技術

*   Laravel
*   React
*   TypeScript

## 機能一覧

*   ユーザ管理機能
*   チーム管理機能
*   プロジェクト管理機能
*   要件定義支援機能
*   DB設計支援機能
*   Migration作成機能
*   EloquentModel作成機能

## 画面一覧

*   ログイン画面
*   ユーザ管理画面
*   チーム管理画面
*   プロジェクト管理画面
*   要件定義作成/編集画面
*   DB設計作成/編集画面
*   Migration作成/編集画面
*   EloquentModel作成/編集画面

## テーブル一覧

| テーブル名 | 説明 |
|-|-|
| users | ユーザ情報を保存する。 |
| teams | チーム情報を保存する。 |
| team\_users | チームとユーザの紐付け情報を保存する。 |
| projects | プロジェクト情報を保存する。 |
| project\_requirements | 要件定義情報を保存する。 |
| project\_table\_designs | テーブル設計情報を保存する。 |
| project\_migrations | Migrationファイル情報を保存する。 |
| project\_eloquent\_models | Eloquent Modelファイル情報を保存する。 |

"""

## 注意事項

次のカラムを含めてください。
概要、やらないこと、使用技術、機能一覧、画面一覧、テーブル一覧

| created\_at | timestamp | YES | NULL | 作成日時 |
| updated\_at | timestamp | YES | NULL | 更新日時 |

```

| カラム名 | 型 | NULL | デフォルト値 | 説明 |
|-|-|-|-|-|
||||||

```

### 出力フォーマット

出力フォーマットは次に示すmarkdown形式としてください。

```

| カラム名 | 型 | NULL | デフォルト値 | 説明 |
|-|-|-|-|-|
||||||

```
