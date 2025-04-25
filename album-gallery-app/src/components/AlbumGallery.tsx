// import { Box, Grid } from '@mui/material'
// import AlbumList from './AlbumList'
// import PhotoGrid from './PhotoGrid'

// export default function AlbumGallery() {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={4}>
//         <AlbumList />
//       </Grid>
//       <Grid item xs={8}>
//         <PhotoGrid />
//       </Grid>
//     </Grid>
//   )
// }
// import { Box, Grid } from '@mui/material'
// import AlbumList from './AlbumList'
// import PhotoGrid from './PhotoGrid'

// export default function AlbumGallery() {
//   return (
//     <Box p={2}>
//       <h2>✅ Album Gallery is loading</h2>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <p>📁 Album List section</p>
//           <AlbumList />
//         </Grid>
//         <Grid item xs={8}>
//           <p>🖼️ Photo Grid section</p>
//           <PhotoGrid />
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

// import { Box, Grid } from '@mui/material'
// import AlbumForm from './AlbumForm'
// import AlbumList from './AlbumList'
// import PhotoForm from './PhotoForm'
// import PhotoGrid from './PhotoGrid'

// export default function AlbumGallery() {
//   return (
//     <Box p={2}>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <AlbumForm />
//           <AlbumList />
//         </Grid>
//         <Grid item xs={8}>
//           <PhotoForm />
//           <PhotoGrid />
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }
// src/components/AlbumGallery.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import AlbumForm from './AlbumForm';
import AlbumList from './AlbumList';
import PhotoForm from './PhotoForm';
import PhotoGrid from './PhotoGrid';

export default function AlbumGallery() {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <AlbumForm />
          <AlbumList />
        </Grid>
        <Grid item xs={8}>
          <PhotoForm />
          <PhotoGrid />
        </Grid>
      </Grid>
    </Box>
  );
}
