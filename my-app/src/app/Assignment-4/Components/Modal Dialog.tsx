"use client";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function ModalDialog() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInput("");
  };

  const handleSubmit = () => {
    alert(`You entered: ${input}`);
    handleClose();
  };

  return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Details</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Enter something"
            type="text"
            fullWidth
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!input.trim()}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
