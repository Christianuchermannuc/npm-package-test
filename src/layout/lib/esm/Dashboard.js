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
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MainListItems } from "./listItems";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function Copyright(props) {
    return (React.createElement(Typography, __assign({ variant: "body2", color: "text.secondary", align: "center" }, props),
        "Copyright © ",
        React.createElement(Link, { color: "inherit", href: "https://mui.com/" }, "Your Website"),
        " ",
        new Date().getFullYear(),
        "."));
}
var drawerWidth = 240;
var AppBar = styled(MuiAppBar, {
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
var Drawer = styled(MuiDrawer, {
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
var mdTheme = createTheme();
var Dashboard = function (props) {
    // function DashboardContent() {
    var _a = React.useState(true), open = _a[0], setOpen = _a[1];
    var toggleDrawer = function () {
        setOpen(!open);
    };
    var TestComponents = props.component;
    return (React.createElement(ThemeProvider, { theme: mdTheme },
        React.createElement(Box, { sx: { display: "flex" } },
            React.createElement(CssBaseline, null),
            React.createElement(AppBar, { position: "absolute", open: open },
                React.createElement(Toolbar, { sx: {
                        pr: "24px", // keep right padding when drawer closed
                    } },
                    React.createElement(IconButton, { edge: "start", color: "inherit", "aria-label": "open drawer", onClick: toggleDrawer, sx: __assign({ marginRight: "36px" }, (open && { display: "none" })) },
                        React.createElement(MenuIcon, null)),
                    React.createElement(Typography, { component: "h1", variant: "h6", color: "inherit", noWrap: true, sx: { flexGrow: 1 } }, props.title),
                    React.createElement(IconButton, { color: "inherit" },
                        React.createElement(Badge, { badgeContent: 4, color: "secondary" },
                            React.createElement(NotificationsIcon, null))))),
            React.createElement(Drawer, { variant: "permanent", open: open },
                React.createElement(Toolbar, { sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: [1],
                    } },
                    React.createElement(IconButton, { onClick: toggleDrawer },
                        React.createElement(ChevronLeftIcon, null))),
                React.createElement(Divider, null),
                React.createElement(List, { component: "nav" },
                    React.createElement(MainListItems, { components: props.component }))),
            React.createElement(Box, { component: "main", sx: {
                    backgroundColor: function (theme) {
                        return theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900];
                    },
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                } },
                React.createElement(Toolbar, null),
                React.createElement(Container, { maxWidth: "lg", sx: { mt: 4, mb: 4 } },
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
                    React.createElement(Routes, null,
                        React.createElement(React.Fragment, null,
                            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                            TestComponents.map(function (comp, index) {
                                var CompElemet = comp;
                                return (React.createElement(Route, { path: "/".concat(index), element: React.createElement(CompElemet, null) }));
                            })))
                    //<TestComponent></TestComponent>
                    ),
                    React.createElement(Copyright, { sx: { pt: 4 } }))))));
};
export default Dashboard;
