let createError  = require('http-errors');
let express      = require('express');
const app        = express();
let cors         = require('cors')
let path         = require('path');
const bodyParser = require('body-parser');
const session    = require('express-session');
const flash      = require('connect-flash');
const PORT       = process.env.PORT || 3001;

app.use(session({
    secret:'flashblog',
    saveUninitialized: true,
    resave: true
}));
  
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(express.json());



app.use("/",routes);

app.listen(PORT,()=>{
    console.log(`Server Running On PORT : ${PORT}`);
})

app.set('view engine', 'ejs');
