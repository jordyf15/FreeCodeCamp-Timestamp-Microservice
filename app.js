const express=require("express");

const app = express();
//so it can serve static files like CSS
app.use('/public',express.static(__dirname+'/static'));
//main route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/static/index.html');
})
//api/timestamp route with parameters
app.get('/api/timestamp/:date_string',(req,res)=>{
    console.log(new Date(parseInt(req.params.date_string)));
    if(new Date(req.params.date_string)=="Invalid Date"){// invalid date
        if(new Date(parseInt(req.params.date_string))!="Invalid Date"){  //check if it is unix instead
            res.send({unix: parseInt(req.params.date_string),
                utc: new Date(parseInt(req.params.date_string)).toUTCString()});
        }else{//invalid date and not unit
            res.send({error: "Invalid Date"})
        }
    }else{//valid date
        res.send({unix: Date.parse(req.params.date_string),
        utc: new Date(req.params.date_string).toUTCString()});
    }
})
//api/timestamp route without parameters or date_string is empty
app.get('/api/timestamp/',(req,res)=>{
    res.send({unix: Date.parse(new Date),
        utc: new Date().toUTCString()});
})

app.listen(3000);