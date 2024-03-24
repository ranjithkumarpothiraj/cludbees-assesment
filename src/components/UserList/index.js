// import Box from "@material-ui/core/Box"

import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import './style.css'
import { BASE_URL, LOADER_TEXT, User_LIST_TEXT } from "../../constants";

const UserList = () => {


  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => (setUsers(data)))
      .catch((err) => console.error(err))
  }

  const StyledList = styled(List)({
    width: '100%', backgroundColor: '#f5f4f4', overflow: 'auto',
    maxHeight: "70vh",
    position: 'relative',
  });

  return (
    <>
      <div className='header'>{User_LIST_TEXT}</div>
      <StyledList >
        {users.length ? users.map((user, index) => {
          let { id, avatar_url, login } = user
          return (
            <Fragment key={id}>
              <ListItem alignItems="center" button component={Link} to={`/user/${user.login}`}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={login}
                />
              </ListItem>
              {users.length - 1 !== index && <Divider component="p" />}
            </Fragment>
          )
        }
        ) : <Box className='loader'>{LOADER_TEXT}</Box>}
      </StyledList>

    </>
  )
}
export default UserList