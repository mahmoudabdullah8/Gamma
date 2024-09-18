import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ResultModalProps {
  status: "success" | "error" | null;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  close: () => void;
  closable?: boolean;
}

export default function ResultModal({
  status,
  title,
  subtitle,
  content,
  close,
  closable = true,
}: ResultModalProps) {
  const isVisible = Boolean(status);

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "40%",
          height: "auto",
        },
      }}
      open={isVisible}
      onClose={closable ? close : undefined}
      aria-labelledby="result-dialog-title"
    >
      <div className="flex flex-col items-center justify-center px-5 pt-5">
        {status == "error" && (
          <ErrorOutlineIcon sx={{ fontSize: "100px", color: "red" }} />
        )}
        {status == "success" && (
          <CheckCircleOutlinedIcon sx={{ fontSize: "100px", color: "green" }} />
        )}
        <Typography className="p-5" component="h4" variant="h6">
          {title}
        </Typography>
        {closable && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={close}
            aria-label="close"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>

      <DialogContent sx={{padding:"5px",margin:"5px"}}>
        <Typography
        sx={{textAlign:"center"}}
          variant="body2"
          color={status === "error" ? "error" : "textPrimary"}
        >
          {subtitle}
        </Typography>
        {content && <Typography variant="body2">{content}</Typography>}
      </DialogContent>
    </Dialog>
  );
}
