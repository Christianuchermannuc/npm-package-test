"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var List_1 = __importDefault(require("@mui/material/List"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
var Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
var listItems_1 = require("./listItems");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./Home"));
function Copyright(props) {
    return (React.createElement(Typography_1.default, __assign({ variant: "body2", color: "text.secondary", align: "center" }, props),
        "Copyright © ",
        React.createElement(Link_1.default, { color: "inherit", href: "https://mui.com/" }, "Your Website"),
        " ",
        new Date().getFullYear(),
        "."));
}
var drawerWidth = 240;
var AppBar = (0, styles_1.styled)(AppBar_1.default, {
    shouldForwardProp: function (prop) { return prop !== "open"; },
})(function (_a) {
    var theme = _a.theme, open = _a.open;
    return (__assign({ zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }) }, (open && {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth, "px)"),
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })));
});
var Drawer = (0, styles_1.styled)(Drawer_1.default, {
    shouldForwardProp: function (prop) { return prop !== "open"; },
})(function (_a) {
    var _b;
    var theme = _a.theme, open = _a.open;
    return ({
        "& .MuiDrawer-paper": __assign({ position: "relative", whiteSpace: "nowrap", width: drawerWidth, transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }), boxSizing: "border-box" }, (!open && (_b = {
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7)
            },
            _b[theme.breakpoints.up("sm")] = {
                width: theme.spacing(9),
            },
            _b))),
    });
});
var mdTheme = (0, styles_1.createTheme)();
var Dashboard = function (props) {
    // function DashboardContent() {
    var _a = React.useState(true), open = _a[0], setOpen = _a[1];
    var toggleDrawer = function () {
        setOpen(!open);
    };
    var TestComponents = props.component;
    return (React.createElement(styles_1.ThemeProvider, { theme: mdTheme },
        React.createElement(Box_1.default, { sx: { display: "flex" } },
            React.createElement(CssBaseline_1.default, null),
            React.createElement(AppBar, { position: "absolute", open: open },
                React.createElement(Toolbar_1.default, { sx: {
                        pr: "24px", // keep right padding when drawer closed
                    } },
                    React.createElement(IconButton_1.default, { edge: "start", color: "inherit", "aria-label": "open drawer", onClick: toggleDrawer, sx: __assign({ marginRight: "36px" }, (open && { display: "none" })) },
                        React.createElement(Menu_1.default, null)),
                    React.createElement(Typography_1.default, { component: "h1", variant: "h6", color: "inherit", noWrap: true, sx: { flexGrow: 1 } }, props.title),
                    React.createElement(IconButton_1.default, { color: "inherit" },
                        React.createElement(Badge_1.default, { badgeContent: 4, color: "secondary" },
                            React.createElement(Notifications_1.default, null))))),
            React.createElement(Drawer, { variant: "permanent", open: open },
                React.createElement(Toolbar_1.default, { sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: [1],
                    } },
                    React.createElement(IconButton_1.default, { onClick: toggleDrawer },
                        React.createElement(ChevronLeft_1.default, null))),
                React.createElement(Divider_1.default, null),
                React.createElement(List_1.default, { component: "nav" },
                    React.createElement(listItems_1.MainListItems, { components: props.component }))),
            React.createElement(Box_1.default, { component: "main", sx: {
                    backgroundColor: function (theme) {
                        return theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900];
                    },
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                } },
                React.createElement(Toolbar_1.default, null),
                React.createElement(Container_1.default, { maxWidth: "lg", sx: { mt: 4, mb: 4 } },
                    props.children ? (props.children) : (
                    // <Grid item xs={12}>
                    //   <Paper
                    //     sx={{
                    //       p: 2,
                    //       display: "flex",
                    //       flexDirection: "column",
                    //       height: 240,
                    //     }}
                    //   >
                    //     No content
                    //   </Paper>
                    // </Grid>
                    React.createElement(react_router_dom_1.Routes, null,
                        React.createElement(React.Fragment, null,
                            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1.default, null) }),
                            TestComponents.map(function (comp, index) {
                                var CompElemet = comp;
                                return (React.createElement(react_router_dom_1.Route, { path: "/".concat(index), element: React.createElement(CompElemet, null) }));
                            })))
                    //<TestComponent></TestComponent>
                    ),
                    React.createElement(Copyright, { sx: { pt: 4 } }))))));
};
exports.default = Dashboard;
