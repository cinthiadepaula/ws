const mongoose = require("mongoose")

const URI = 'mongodb+srv://salaoadmin:admin123@clusterdev.hsfsc7m.mongodb.net/';


//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);


mongoose.connect(URI)
.then(() => console.log('DB is UL!'))
.catch(() => console.log(err));