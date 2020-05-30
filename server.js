const express = require('express');

const app = express();

//*THIS IS A END POINT *//
app.get('/', (req, res) => res.send('API is Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
