// import { useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { List, ListItem, ListItemText } from '@mui/material'

// export default function AlbumList() {
//   const albums = useSelector((state: RootState) => state.albums.list)

//   return (
//     <List>
//       {albums.map((album) => (
//         <ListItem button key={album.id}>
//           <ListItemText primary={album.title} />
//         </ListItem>
//       ))}
//     </List>
//   )
// }
// components/AlbumList.tsx
// export default function AlbumList() {
//   return <div style={{ color: 'green' }}>AlbumList is rendering</div>
// }
// // src/components/AlbumList.tsx
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../store'
// import { selectAlbum } from '../slices/albumSlice'
// import { List, ListItem, ListItemText } from '@mui/material'

// export default function AlbumList() {
//   const albums = useSelector((state: RootState) => state.albums.list)
//   const selectedId = useSelector((state: RootState) => state.albums.selectedAlbumId)
//   const dispatch = useDispatch()

//   return (
//     <List>
//       {albums.map((album) => (
//         <ListItem
//           button
//           key={album.id}
//           selected={album.id === selectedId}
//           onClick={() => dispatch(selectAlbum(album.id))}
//         >
//           <ListItemText primary={album.title} />
//         </ListItem>
//       ))}
//     </List>
//   )
// }
// components/AlbumList.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { selectAlbum } from '../slices/albumSlice';
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
} from '@mui/material';

export default function AlbumList() {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.albums.list);

  return (
    <Box mt={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h5">Albums</Typography>
        {/* <Button variant="contained" size="small">Add Album</Button> */}
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map((album) => (
            <TableRow key={album.id} hover onClick={() => dispatch(selectAlbum(album.id))}>
              <TableCell>{album.title}</TableCell>
              <TableCell>{new Date(parseInt(album.id)).toISOString().split('T')[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
