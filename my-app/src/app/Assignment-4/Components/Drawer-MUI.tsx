"use client";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  const items = ["Home", "About", "Dashboard", "Profile"];
  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: 180,
        [`& .MuiDrawer-paper`]: {
          width: 180,
        },
      }}
    >
      <List>
        {items.map((el) => (
          <ListItem  key={el}>
            <ListItemText primary={el} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
