import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material";


// Define the types for the props
interface ConfirmModalProps {
  title: string | null;
  subtitle: string | null;
  onOk?: () => void; // Changed to optional
  onCancel?: () => void; // Changed to optional
}

export default function ConfirmModal({
  title,
  subtitle,
  onOk,
  onCancel,
}: ConfirmModalProps) {
  const isVisible = Boolean(title);

  return (
    <Dialog open={isVisible} onClose={onCancel} aria-labelledby="confirm-dialog-title">
      <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel || (() => {})}>{"cancel"}</Button>
        <Button onClick={onOk || (() => {})} color="primary" variant="contained">
          "confirm"
        </Button>
      </DialogActions>
    </Dialog>
  );
}
