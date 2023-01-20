"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondaryListItems = exports.MainListItems = void 0;
var React = __importStar(require("react"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
var Dashboard_1 = __importDefault(require("@mui/icons-material/Dashboard"));
var ShoppingCart_1 = __importDefault(require("@mui/icons-material/ShoppingCart"));
var People_1 = __importDefault(require("@mui/icons-material/People"));
var BarChart_1 = __importDefault(require("@mui/icons-material/BarChart"));
var Layers_1 = __importDefault(require("@mui/icons-material/Layers"));
var Assignment_1 = __importDefault(require("@mui/icons-material/Assignment"));
var react_router_dom_1 = require("react-router-dom");
var MainListItems = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(Dashboard_1.default, null)),
            React.createElement(ListItemText_1.default, { primary: "Dashboard" })),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(ShoppingCart_1.default, null)),
            React.createElement(ListItemText_1.default, { primary: "Orders" })),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(People_1.default, null)),
            React.createElement(ListItemText_1.default, { primary: "Customers" })),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(BarChart_1.default, null)),
            React.createElement(ListItemText_1.default, { primary: "Reports test" })),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(Layers_1.default, null)),
            React.createElement(ListItemText_1.default, { primary: "Testing link" })),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(Layers_1.default, null)),
            React.createElement(react_router_dom_1.Link, { to: "Products" }, "Products")),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(Layers_1.default, null)),
            React.createElement(react_router_dom_1.Link, { to: { pathname: "https://herewecode.io/" }, target: "_self" }, "Open external new tab")),
        React.createElement(ListItemButton_1.default, null,
            React.createElement(ListItemIcon_1.default, null,
                React.createElement(Layers_1.default, null)),
            React.createElement("a", { href: "https://herewecode.io/" }, "Open external current tab")),
        props.components.map(function (comp, index) {
            if (!comp) {
            }
            return (React.createElement(ListItemButton_1.default, null,
                React.createElement(ListItemIcon_1.default, null,
                    React.createElement(Layers_1.default, null)),
                React.createElement(react_router_dom_1.Link, { to: "".concat(index) }, "Dynamic ".concat(index))));
        })));
};
exports.MainListItems = MainListItems;
exports.secondaryListItems = (React.createElement(React.Fragment, null,
    React.createElement(ListSubheader_1.default, { component: "div", inset: true }, "Saved report"),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Assignment_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Current month" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Assignment_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Last quarter" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Assignment_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Year-end sale" }))));
