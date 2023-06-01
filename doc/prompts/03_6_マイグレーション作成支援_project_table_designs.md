project\_table\_designsテーブルのLaravelマイグレーションファイルを作成してください。

"""

## テーブル一覧

| テーブル名 | 説明 |
|-|-|
| users | ユーザ情報を保存する。 |
| teams | チーム情報を保存する。 |
| team\_users | チームとユーザの紐付け情報を保存する。 |
| projects | プロジェクト情報を保存する。 |
| requirements | 要件定義情報を保存する。 |
| table\_designs | テーブル設計情報を保存する。 |
| migrations | Migrationファイル情報を保存する。 |
| eloquent\_models | Eloquent Modelファイル情報を保存する。 |

## テーブル詳細

### project\_table\_designs

| カラム名      | 型          | NULL | デフォルト値 | 説明       |
|---------------|-------------|------|--------------|------------|
| id            | bigint      | NO   |              | レコードID |
| name          | varchar(50) | NO   |              | テーブル名 |
| content       | text        | No  |               | 内容 |
| created\_at    | timestamp   | YES  | NULL         | 作成日時   |
| updated\_at    | timestamp   | YES  | NULL         | 更新日時   |
"""

Laravelのマイグレーションファイルのテンプレートは次の通りです。
"""

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {

    }

    public function down(): void
    {
    }
};

"""
