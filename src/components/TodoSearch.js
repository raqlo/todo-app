import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export function TodoSearch() {
  return (
      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
      >
          <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <SearchIcon />
              </IconButton>
              <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Google Maps"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  fullWidth
              />
          </Box>
      </Box>
  );
}
