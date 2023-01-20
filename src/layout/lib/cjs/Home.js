"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Grid_1 = __importDefault(require("@mui/material/Grid/Grid"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var react_1 = __importDefault(require("react"));
var Home = function () { return (react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
    react_1.default.createElement(Paper_1.default, { sx: {
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
        } }, "Home"))); };
exports.default = Home;
