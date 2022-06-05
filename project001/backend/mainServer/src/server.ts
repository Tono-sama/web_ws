import { HogeRequestConverter } from "./models/requestConverters/hogeRequestConverter"
const express = require('express');

const app = new express();

// HTTPリクエストの処理を登録

// TODO: アーキテクチャ再検討
// 1.(リクエスト受付)
// 2.(変換処理)
// 3.((別サービスにリクエスト)→(別サービスからレスポンス))
// 4.(変換処理)
// 5.((必要であれば)元のレスポンス)
// という流れを行う設定を行うクラスになるはず．

// 処理毎に一連の流れを登録するような形にするのがきれいだが，それだと処理の重複が発生する可能性があるので，重複排除する仕組み必要．

// 元のリクエストに対して最終レスポンスを行うパターン，別のサービスに投げるパターンもありそう
// pipe処理的な感じになる，というかすべき？

// 各部分の設定を引数として設定できるようにするとよさそう．
// TODO: 各部分のIFを定義，記述，設定


const hogeRequestConverter = new HogeRequestConverter(app);

console.log('server start!');
app.listen(3000);