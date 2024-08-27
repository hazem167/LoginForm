import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


export default function AlertTap({message}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
        {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
