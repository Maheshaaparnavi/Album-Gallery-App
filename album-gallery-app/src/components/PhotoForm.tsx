// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { addPhotoToAlbum } from '../slices/albumSlice'
// import { TextField, Button, Stack } from '@mui/material'

// const schema = z.object({
//   title: z.string().min(1, 'Title is required'),
//   url: z.string().url('A valid image URL is required'),
// })

// type FormData = z.infer<typeof schema>

// export default function PhotoForm() {
//   const dispatch = useDispatch()
//   const selectedAlbumId = useSelector((state: RootState) => state.albums.selectedAlbumId)

//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   })

//   const onSubmit = (data: FormData) => {
//     if (!selectedAlbumId) return
//     const newPhoto = {
//       ...data,
//       id: Date.now().toString(),
//       date: new Date().toISOString(),
//     }

//     dispatch(addPhotoToAlbum({ albumId: selectedAlbumId, photo: newPhoto }))
//     reset()
//   }

//   if (!selectedAlbumId) return <p>Please select an album first.</p>

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Stack spacing={2} sx={{ mt: 2 }}>
//         <TextField
//           label="Photo Title"
//           {...register('title')}
//           error={!!errors.title}
//           helperText={errors.title?.message}
//         />
//         <TextField
//           label="Image URL"
//           {...register('url')}
//           error={!!errors.url}
//           helperText={errors.url?.message}
//         />
//         <Button type="submit" variant="contained">Add Photo</Button>
//       </Stack>
//     </form>
//   )
// }
// // src/components/PhotoForm.tsx
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { addPhotoToAlbum } from '../slices/albumSlice'
// import { TextField, Button, Stack } from '@mui/material'

// const schema = z.object({
//   title: z.string().min(1, 'Title is required'),
//   url: z.string().url('A valid image URL is required'),
// })

// type FormData = z.infer<typeof schema>

// export default function PhotoForm() {
//   const dispatch = useDispatch()
//   const selectedAlbumId = useSelector((state: RootState) => state.albums.selectedAlbumId)

//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   })

//   const onSubmit = (data: FormData) => {
//     if (!selectedAlbumId) return
//     dispatch(addPhotoToAlbum({
//       albumId: selectedAlbumId,
//       photo: {
//         ...data,
//         id: Date.now().toString(),
//         date: new Date().toISOString(),
//       }
//     }))
//     reset()
//   }

//   if (!selectedAlbumId) return <p>Please select an album first.</p>

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Stack spacing={2} sx={{ mt: 2 }}>
//         <TextField label="Photo Title" {...register('title')} error={!!errors.title} helperText={errors.title?.message} />
//         <TextField label="Image URL" {...register('url')} error={!!errors.url} helperText={errors.url?.message} />
//         <Button type="submit" variant="contained">Add Photo</Button>
//       </Stack>
//     </form>
//   )
// }
// components/PhotoForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TextField,
  Button,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPhotoToAlbum } from '../slices/albumSlice';
import { RootState } from '../store';

const schema = z.object({
  title: z.string().min(1, 'Photo title is required'),
  url: z.string().url('Enter a valid image URL'),
});

type FormData = z.infer<typeof schema>;

export default function PhotoForm() {
  const dispatch = useDispatch();
  const selectedAlbumId = useSelector((state: RootState) => state.albums.selectedAlbumId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (!selectedAlbumId) return;

    const newPhoto = {
      id: Date.now().toString(),
      ...data,
      date: new Date().toISOString().split('T')[0],
    };

    dispatch(addPhotoToAlbum({ albumId: selectedAlbumId, photo: newPhoto }));
    reset();
  };

  if (!selectedAlbumId) {
    return (
      <Box my={2}>
        <Typography variant="body1" color="text.secondary">
          Select an album to add photos.
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          <Typography variant="h6">Add Photo</Typography>
          <TextField
            label="Title"
            {...register('title')}
            error={!!errors.title}
            helperText={errors.title?.message}
            fullWidth
          />
          <TextField
            label="Image URL"
            {...register('url')}
            error={!!errors.url}
            helperText={errors.url?.message}
            fullWidth
          />
          <Button type="submit" variant="contained">
            Upload Photo
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
