import express from 'express';
import next from 'next';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import { Client, Account, Databases, Users } from "node-appwrite";
import { ID, Query } from "node-appwrite";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";



export async function createSessionClient() {

    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

    const session = cookies().get("appwrite-session");

    if (!session || !session.value) {
        throw new Error("No session");
    }
    console.log(session);
    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        },
    };
}

export async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
        .setKey(process.env.NEXT_APPWRITE_KEY);

    return {
        get account() {
            return new Account(client);
        },

        get database() {
            return new Databases(client);
        },
        get user() {
            return new Users(client);
        },
    };
}




const dev = process.env.NODE_ENV !== 'production'; // Determine if we're in development
const app = next({ dev }); // Initialize Next.js
const handle = app.getRequestHandler(); // Next.js request handler
const allowedOrigins = ['http://localhost:5173', 'https://we-commerce-bay.vercel.app'];

app.prepare().then(() => {

    const {
        APPWRITE_DATABASE_ID: DATABASE_ID,
        VITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
        VITE_STORE_FOR_USERS_COLLECTION_ID: STORE_COLLECTION_ID,
    } = process.env;


    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());


    server.use(
        session({
            secret: "SESSIONSECRET",
            resave: false,
            saveUninitialized: true,
        })
    );

    server.use(passport.initialize());
    server.use(passport.session());

    // Middleware to set headers
    server.use((req, res, next) => {
        // Set common headers
        res.setHeader('X-Powered-By', 'MyApp');
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        // Continue to the next middleware or route handler
        next();
    });

    server.use(cors({
        origin: (origin, callback) => {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }, // Replace with the origin you want to allow
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));

    server.post('/sign-up', async (req, res) => {
        const jsonKey = Object.keys(req.body)[0];
        const jsonObject = JSON.parse(jsonKey);
        const { password, email, confirmPassword } = jsonObject;


        let newUserAccount;

        try {
            const { account, database } = await createAdminClient();
            newUserAccount = await account.create(ID.unique(), email, password);

            if (!newUserAccount) throw new Error('error creating user');

            const newUser = await database.createDocument(
                DATABASE_ID,
                USER_COLLECTION_ID,
                ID.unique(),
                {
                    email: email,
                    password: password,
                    userId: newUserAccount.$id
                }
            )

            const session = await account.createEmailPasswordSession(email, password);

            res.cookie('appwrite-session', session.secret, {
                httpOnly: true, // Cookie accessible only by the server
                sameSite: "strict",
                secure: true,
            });

            console.log("sign-up")
            console.log(newUser);
            res.json(newUser);
        } catch (error) {
            res.json(error);
        }


    });

    server.post('/login', async (req, res) => {
        console.log("recieved")
    })


    passport.use(new Strategy(async function verify(username, password, cb) {

    }));
    // Custom Express API route
    server.get('/', (req, res) => {
        res.json({ message: 'Hello from custom API route!' });
    });

    // You can add custom Express middleware here if needed

    // Handle all other routes with Next.js
    server.all('*', (req, res) => {
        return handle(req, res); // Let Next.js handle all page requests
    });

    const PORT = process.env.PORT || 8000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});