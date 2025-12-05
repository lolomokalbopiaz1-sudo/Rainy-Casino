
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/kyc', (req, res) => {
  res.json({ message: "KYC received OK", received: req.body });
});

app.listen(4000, () => console.log("Mock KYC server running on :4000"));
