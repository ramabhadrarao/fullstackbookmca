// express-mongoose-server.js
// Simple Express + Mongoose CRUD example (Info: name, age)
// Run: set MONGO_URI or use default, then `node express-mongoose-server.js` or `npm run dev` with nodemon

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/crud23";

const app = express();
app.use(cors());
app.use(express.json());

// Mongoose schema
const infoSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 0, max: 150 }
}, { timestamps: true });

const Info = mongoose.model('Info', infoSchema);

// Connect
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Mongodb Connected Successfully'))
  .catch(err => console.error('❌ MongoDB connection error', err));

// Health
app.get('/health', (req, res) => res.json({ ok: true, message: 'Server Running....' }));

// Create
app.post('/info', async (req, res) => {
  try {
    const { name, age } = req.body;
    const doc = new Info({ name, age });
    await doc.save();
    return res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Invalid data', details: err.message });
  }
});

// Read (list + optional search)
app.get('/info', async (req, res) => {
  try {
    const { search } = req.query;
    const filter = search ? { name: new RegExp(search, 'i') } : {}; // partial, case-insensitive
    const docs = await Info.find(filter).sort({ createdAt: -1 });
    return res.json(docs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read single
app.get('/info/:id', async (req, res) => {
  try {
    const doc = await Info.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    return res.json(doc);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Invalid id' });
  }
});

// Update (replace fields provided)
app.put('/info/:id', async (req, res) => {
  try {
    const { name, age } = req.body;
    const update = {};
    if (name !== undefined) update.name = name;
    if (age !== undefined) update.age = age;

    const doc = await Info.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    return res.json(doc);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Invalid request', details: err.message });
  }
});

// Partial update (PATCH) - updates only provided fields
app.patch('/info/:id', async (req, res) => {
  try {
    const update = req.body;
    const doc = await Info.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    return res.json(doc);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Invalid request', details: err.message });
  }
});

// Delete
app.delete('/info/:id', async (req, res) => {
  try {
    const doc = await Info.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    return res.json({ ok: true, id: req.params.id });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Invalid id' });
  }
});

app.listen(PORT, () => console.log(`Server Running at http://localhost:${PORT}/health`));


/*
curl -X POST http://localhost:5000/info -H "Content-Type: application/json" -d '{"name":"Bob","age":40}'


curl -X PUT http://localhost:5000/info/<id> -H "Content-Type: application/json" -d '{"name":"Bobby","age":41}'
curl -X PATCH http://localhost:5000/info/<id> -H "Content-Type: application/json" -d '{"age":42}'
curl -X DELETE http://localhost:5000/info/<id>

*/