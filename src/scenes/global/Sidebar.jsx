import React, { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import "react-pro-sidebar/dist";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      {!isCollapsed && <Typography>{title}</Typography>}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, SetIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        width: `${isCollapsed ? "8%" : "21%"}`,
        height: `${isCollapsed ? "111%" : "111%"}`,
        background: `${colors.primary[400]} !important`,
        "& .ps-menuitem-root": {
          padding: "0px 20px !important",
        },

        "& .ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              padding: "0px",
              height: "40px !important",

              "&:hover": {
                color: "#868dfb !important",
                background: "none",
              },
              "&:active": {
                color: "#6870fa !important",
              },
            },
          }}
        >
          {/* logo and menu icon */}
          <MenuItem
            onClick={() => SetIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => SetIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user */}
          {!isCollapsed && (
            <Box mb="15px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="prfile-user"
                  width="80px"
                  height="80px"
                  src={`../../assets/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Salma
                </Typography>
                <Typography variant="h5" color={colors.grey[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* menu items */}
          {/* <Box paddingLeft={isCollapsed ? undefined : "5%"}> */}
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 0px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
          </Box>
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;
