const mongoose = require("mongoose")

const URI = '';

mongoose.set('Use1newRulParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect(URI)
.then(() => console.log('DB is UL!'))
.catch(() => console.log(err));