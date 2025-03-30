"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const zod_1 = require("zod");
const authSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
// Register User
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = authSchema.parse(req.body);
        const existingUser = yield prisma_1.default.user.findUnique({ where: { email } });
        if (existingUser)
            return res.status(400).json({ error: "Email already in use" });
        yield prisma_1.default.user.create({ data: { email, password } });
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid input" });
    }
});
exports.register = register;
// Login User (Simple Password Check)
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = authSchema.parse(req.body);
        const user = yield prisma_1.default.user.findUnique({ where: { email } });
        if (!user)
            return res.status(400).json({ error: "Invalid credentials" });
        if (password != user.password)
            return res.status(400).json({ error: "Invalid credentials" });
        res.json({ message: "Login successful", user: { email: user.email } });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid input" });
    }
});
exports.login = login;
