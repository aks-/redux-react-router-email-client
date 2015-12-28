import express from 'express';
import kraken from 'kraken-js';

const app = express(); 
app.use(kraken());
app.listen(3000);
