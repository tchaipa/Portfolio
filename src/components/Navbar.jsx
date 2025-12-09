import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./Navbar.css";
import { Button } from "@mui/material";
import link from "../assets/TchaipaCv_WD.pdf";

function Navbar() {
  const name = "<TAFADZWA/>";
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="app-bar">
          <Toolbar>
            <h2 className="nav-title"> {name} </h2>
            <div className="nav-button">
              <Button variant="outlined">
                <a href={link}>Download CV</a>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
