// import { useSelector } from 'react-redux'
// import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

// export default function PhotoGrid() {
//   const selectedAlbumPhotos = [] // You will get this from state later

//   return (
//     <Grid container spacing={2}>
//       {selectedAlbumPhotos.map((photo) => (
//         <Grid item xs={4} key={photo.id}>
//           <Card>
//             <CardMedia component="img" height="140" image={photo.url} alt={photo.title} />
//             <CardContent>
//               <Typography>{photo.title}</Typography>
//               <Typography variant="caption">{photo.date}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   )
// }
// components/PhotoGrid.tsx
// export default function PhotoGrid() {
//   return <div style={{ color: 'purple' }}>PhotoGrid is rendering</div>
// }
// src/components/PhotoGrid.tsx
// import { useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

// export default function PhotoGrid() {
//   const albums = useSelector((state: RootState) => state.albums.list)
//   const selectedAlbumId = useSelector((state: RootState) => state.albums.selectedAlbumId)
//   const album = albums.find((a) => a.id === selectedAlbumId)
//   const photos = album?.photos || []

//   return (
//     <Grid container spacing={2} sx={{ mt: 2 }}>
//       {photos.map((photo) => (
//         <Grid item xs={4} key={photo.id}>
//           <Card>
//             <CardMedia component="img" height="140" image={photo.url} alt={photo.title} />
//             <CardContent>
//               <Typography variant="h6">{photo.title}</Typography>
//               <Typography variant="caption">{photo.date}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   )
// }
// components/PhotoGrid.tsx
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

export default function PhotoGrid() {
  const albums = useSelector((state: RootState) => state.albums.list)
  const selectedAlbumId = useSelector((state: RootState) => state.albums.selectedAlbumId)
  const album = albums.find((a) => a.id === selectedAlbumId)
  const photos = album?.photos || []

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {photos.map((photo) => (
        <Grid item xs={12} sm={6} md={4} key={photo.id}>
          <Card>
            <CardMedia component="img" height="140" image={photo.url} alt={photo.title} />
            <CardContent>
              <Typography variant="h6">{photo.title}</Typography>
              <Typography variant="caption">{photo.date}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
