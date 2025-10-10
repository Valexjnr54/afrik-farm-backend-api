import express, { Request, Response, NextFunction } from "express";
// import rateLimiter from "./middlewares/rateLimitMiddleware";
import cors from "cors";
import { adminAuthRouter } from "./routes/auth/adminAuthRoutes";
import { adminRouter } from "./routes/admin/admin.routes";
// import { Config } from "./config/config";


const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
// app.use(rateLimiter);
// app.use(cors({ origin: Config.corsAllowedOrigin }));

app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});

const route = '/api/v1';

app.get('/', (_request: Request, response: Response) => {
    return response.send('Afrik Farm App has Started');
});

app.get(`${route}`, (_request: Request, response: Response) => {
    return response.send('Afrik Farm App Backend has Started');
});

app.use(`${route}/auth`, adminAuthRouter);

app.use(`${route}/admin`, adminRouter);


app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof SyntaxError && 'body' in error) {
        return response.status(400).json({
            status: "failed",
            success: false,
            error: "Invalid Json",
            message: "the request contains invaild JSON"
        })
    }
    next(error);
});

app.use((request, response) => {
    response.status(404).json({
        status: "failed",
        success: false,
        error: "Not Found",
        message: `The requested resource ${request.url} was not found`
    })
});

export default app;