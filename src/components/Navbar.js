import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"

export default function Navbar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          style={{
            marginLeft: -12,
            marginRight: 20
          }}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          Red Alert
        </Typography>
        {/* //TODO Use withClasses */}
        <div>
          <div>
            <SearchIcon />
          </div>
          <InputBase placeholder="Search…" />
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
