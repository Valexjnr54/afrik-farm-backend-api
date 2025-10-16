"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rateLimitMiddleware_1 = __importDefault(require("./middlewares/rateLimitMiddleware"));
const cors_1 = __importDefault(require("cors"));
const adminAuthRoutes_1 = require("./routes/auth/adminAuthRoutes");
const admin_routes_1 = require("./routes/admin/admin.routes");
const userAuthRoutes_1 = require("./routes/auth/userAuthRoutes");
const lga_routes_1 = require("./routes/lga/lga.routes");
const config_1 = require("./config/config");
const misc_routes_1 = require("./routes/misc/misc.routes");
const app = (0, express_1.default)();
app.set("trust proxy", 1);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(rateLimitMiddleware_1.default);
app.use((0, cors_1.default)({ origin: config_1.Config.corsAllowedOrigin }));
app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});
const route = '/api/v1';
app.get('/', (_request, response) => {
    return response.send('Afrik Farm App has Started');
});
app.get(`${route}`, (_request, response) => {
    return response.send('Afrik Farm App Backend has Started');
});
app.use(`${route}/auth`, adminAuthRoutes_1.adminAuthRouter);
app.use(`${route}/auth`, userAuthRoutes_1.userAuthRouter);
app.use(`${route}/admin`, admin_routes_1.adminRouter);
app.use(`${route}/lga`, lga_routes_1.lgaRouter);
app.use(`${route}`, misc_routes_1.miscRouter);
app.use((error, request, response, next) => {
    if (error instanceof SyntaxError && 'body' in error) {
        return response.status(400).json({
            status: "failed",
            success: false,
            error: "Invalid Json",
            message: "the request contains invaild JSON"
        });
    }
    next(error);
});
app.use((request, response) => {
    response.status(404).json({
        status: "failed",
        success: false,
        error: "Not Found",
        message: `The requested resource ${request.url} was not found`
    });
});
exports.default = app;
