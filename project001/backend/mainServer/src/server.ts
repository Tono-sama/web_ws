import { HogeRequestConverter } from "../models/requestConverters/hogeRequestConverter"
const express = require('express');

const app = express();

// HTTPリクエストの処理を登録
const hogeRequestConverter = new HogeRequestConverter(app);

console.log('server start!');
app.listen(3000);