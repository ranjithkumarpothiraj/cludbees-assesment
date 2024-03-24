
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './style.css'


const UserDetails = () => {
  const { username } = useParams("");
  const [user, setUser] = useState("");
  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => (setUser(data)))
        .catch((err) => console.error(err))
    }
  }, [username])

  const FIRST_NAME_LABEL = "First Name :";
  const SECOND_NAME_LABEL = "Second Name :";
  const COMPANY_LABEL = "Company :";
  const LOCATION_LABEL = "Location :";
  const USER_NOT_FOUND_TEXT = "User not found";
  const LOADER_TEXT = "Fetching user details..."

  {
    const { id, name, avatar_url, login, company, location, message } = user
    return (
      <>
        <div className='header'>User Details</div>
        {id ?
          <Paper className='profile-details' elevation={3} >
            <Avatar src={avatar_url} sx={{ width: "200px", height: "200px", margin: "30px 0px" }} />
            <Chip label={login} color='secondary' sx={{ width: "300px" }} />
            <Box className='table-container'>
              <Table>
                <TableBody>
                  {name &&
                    <>
                      <TableRow>
                        <TableCell>
                          <Stack direction={"row"} spacing={3} alignItems={'center'}>
                            <Typography variant='h6' component={"p"}>  {FIRST_NAME_LABEL} </Typography>
                            <Typography>  {name.split(" ")[0] || "-"} </Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Stack direction={"row"} spacing={3} alignItems={'center'}>
                            <Typography variant='h6' component={"p"}> {SECOND_NAME_LABEL} </Typography>
                            <Typography> {name.split(" ")[1] || "-"} </Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    </>
                  }
                  {company && <TableRow>
                    <TableCell>
                      <Stack direction={"row"} spacing={3} alignItems={'center'}>
                        <Typography variant='h6' component={"p"}> {COMPANY_LABEL} </Typography>
                        <Typography> {company} </Typography>
                      </Stack></TableCell>
                  </TableRow>}
                  {location && <TableRow>
                    <TableCell>
                      <Stack direction={"row"} spacing={3} alignItems={'center'}>
                        <Typography variant='h6' component={"p"}> {LOCATION_LABEL} </Typography>
                        <Typography> {location} </Typography>
                      </Stack></TableCell>
                  </TableRow>}
                </TableBody>
              </Table>
            </Box>

          </Paper>
          : <Box className='loader'>{message ? USER_NOT_FOUND_TEXT : LOADER_TEXT}</Box>}
      </>
    );
  }
}

export default UserDetails