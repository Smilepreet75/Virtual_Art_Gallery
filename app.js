const express = require("express");
const app = express();
// const connection = require("./connection")
const cors = require("cors");
const fileUpload = require("express-fileupload");
// const cookieParser = require('cookie-parser')
const {verify} = require('jsonwebtoken');

// -------------------------------------------------------------------------

const adminController = require("./Controllers/admin.controller");
const userController = require("./Controllers/user.controller")
const artistController = require("./Controllers/artist.controller");
const {ArtistLogin} = require("./Controllers/artist.controller");

// -------------------------------------------------------------------------

// app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static("public"));

// -------------------------------------------------------------------------

function adminAuthorization_HTTP_Request(req, res, next) {
    let token = req.body.token

    if (!token) {
        return res.json({jwt: 'Unauthorized Access', message: ''})
    }

    try {
        let secret = "adc@1234";
        req['adminInfo'] = verify(token, secret);
        next();
    } catch (error) {
        res.json({jwt: error.message, message: ''})
    }
}

function artistAuthorization_HTTP_Request(req, res, next) {
    let token = req.body.token;

    if (!token) {
        return res.json({jwt: 'Unauthorized Access', message: ''});
    }

    try {
        let secret = "adc@1234";
        req['artistInfo'] = verify(token, secret);
        next();
    } catch (error) {
        res.json({jwt: error.message, message: ''})
    }
}

// -------------------------------------------------------------------------

function artistAuthorization_GET_Request(req, res, next) {
    // console.log(req.headers.authorization);
    let token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.json({jwt: 'Unauthorized Access', message: ''});
    }

    try {
        let secret = "adc@1234";
        req['artistInfo'] = verify(token, secret);
        next();
    } catch (error) {
        res.json({jwt: error.message, message: ''})
    }
}

function userAuthorization_GET_Request(req, res, next) {
    let token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.json({jwt: 'Unauthorized Access', message: ''});
    }

    try {
        let secret = "abc@123"
        req['userInfo'] = verify(token, secret);
        next();
    } catch (error) {
        res.json({jwt: error.message, message: ''})
    }
}


// -------------------------------------------------------------------------
/* -------------------------------- Admin ------------------------------- */
app.get("/admin-delivered-orders", adminController.DeliveredOrder);
app.get("/admin-shipped-orders", adminController.ShippedOrder);
app.get("/admin-pending-orders", adminController.PendingOrder);
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
/* ------------------------------- Artist ------------------------------- */
app.get("/artist-update-order-status/:id/:status", artistController.UpdateOrderStatus);
app.get("/artist-delivered-orders", artistAuthorization_GET_Request, artistController.ArtistOrderDelivered);
app.get("/artist-shipped-orders", artistAuthorization_GET_Request, artistController.ArtistOrderShipped);
app.get("/artist-pending-orders", artistAuthorization_GET_Request, artistController.ArtistOrder);
app.post("/artwork-photo", artistController.ArtworkPhoto);
app.get("/read-artist-artwork", artistAuthorization_GET_Request, artistController.ReadMyArtwork);
app.post('/manage-art-work', artistAuthorization_HTTP_Request, artistController.ManageArtWork)
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
/* ------------------------------- User --------------------------------- */
app.get("/my-orders", userAuthorization_GET_Request, userController.MyOrders);
app.post("/place-order", userAuthorization_GET_Request, userController.PlaceOrder);
app.get("/user-info", userAuthorization_GET_Request, userController.UserInfo);
app.get("/my-cart", userAuthorization_GET_Request, userController.ReadCart);
app.get("/add-to-cart/:artwork_id", userAuthorization_GET_Request, userController.AddToCart);
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
/* ------------------------------- Public -------------------------------- */
app.get("/read-home-page-artwork", artistController.ReadHomePageArtwork);
app.get("/read-all-artist-artwork", artistController.ReadAllArtwork);
// -------------------------------------------------------------------------

app.post("/category", adminController.AddCategory);
app.get("/category", adminController.ReadCategory);
app.delete("/category/:id", adminController.DeleteCategory);

app.post("/admin-login", adminController.AdminLogin)
app.post('/change-password', adminAuthorization_HTTP_Request, adminController.AdminChangePassword);

app.post('/user-signup', userController.UserSignup)
app.post('/user-login', userController.UserSingIn)

app.post('/artist-signup', artistController.ArtistSignup);
app.post('/artist-login', artistController.ArtistLogin);
app.get('/manage-artist', artistController.ShowData);
app.post('/manage-artist', artistController.UpdateStatus)

// app.post('/manage-art-work', artistAuthorization_HTTP_Request, (req, res) => {
// // app.post('/manage-art-work', adminAuthorization_HTTP_Request, (req, res) => {
//    try {
//        // console.log(req['artistInfo']);
//        console.log(req.body);
//        res.json({error: "", message: "Art work Added"});
//    } catch (e) {
//        res.json({error: e.message});
//    }
// })


const Port = 5000;
app.listen(Port, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Server is running on port " + Port);
    }
});