import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
export var MainListItems = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(DashboardIcon, null)),
            React.createElement(ListItemText, { primary: "Dashboard" })),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(ShoppingCartIcon, null)),
            React.createElement(ListItemText, { primary: "Orders" })),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(PeopleIcon, null)),
            React.createElement(ListItemText, { primary: "Customers" })),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(BarChartIcon, null)),
            React.createElement(ListItemText, { primary: "Reports test" })),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(LayersIcon, null)),
            React.createElement(ListItemText, { primary: "Testing link" })),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(LayersIcon, null)),
            React.createElement(Link, { to: "Products" }, "Products")),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(LayersIcon, null)),
            React.createElement(Link, { to: { pathname: "https://herewecode.io/" }, target: "_self" }, "Open external new tab")),
        React.createElement(ListItemButton, null,
            React.createElement(ListItemIcon, null,
                React.createElement(LayersIcon, null)),
            React.createElement("a", { href: "https://herewecode.io/" }, "Open external current tab")),
        props.components.map(function (comp, index) {
            if (!comp) {
            }
            return (React.createElement(ListItemButton, null,
                React.createElement(ListItemIcon, null,
                    React.createElement(LayersIcon, null)),
                React.createElement(Link, { to: "".concat(index) }, "Dynamic ".concat(index))));
        })));
};
export var secondaryListItems = (React.createElement(React.Fragment, null,
    React.createElement(ListSubheader, { component: "div", inset: true }, "Saved report"),
    React.createElement(ListItemButton, null,
        React.createElement(ListItemIcon, null,
            React.createElement(AssignmentIcon, null)),
        React.createElement(ListItemText, { primary: "Current month" })),
    React.createElement(ListItemButton, null,
        React.createElement(ListItemIcon, null,
            React.createElement(AssignmentIcon, null)),
        React.createElement(ListItemText, { primary: "Last quarter" })),
    React.createElement(ListItemButton, null,
        React.createElement(ListItemIcon, null,
            React.createElement(AssignmentIcon, null)),
        React.createElement(ListItemText, { primary: "Year-end sale" }))));
