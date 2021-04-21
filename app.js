const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');


//routes
const routes = require('./routes/index');
const groupRoutes = require('./routes/group')

// load config
dotenv.config({ path: './config/config.env'});

// passport config
require('./config/passport')(passport)

//db connections
const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// handlebar helpers
const { formatDate } = require('./helpers/hbs')

// handlebars
app.engine('.hbs', exphbs({ helpers: { formatDate }, defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//session middleware
app.use(session({
    secret: 'xiahua_session',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    
}));

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// static folfer
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', routes);
app.use('/group', groupRoutes)








const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`XiaHua Backend is runing at http://localhost:${port}`)
})