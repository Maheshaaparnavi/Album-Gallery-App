// // import { useForm } from 'react-hook-form'
// // import { z } from 'zod'
// // import { zodResolver } from '@hookform/resolvers/zod'
// // import { TextField, Button } from '@mui/material'

// // const schema = z.object({
// //   title: z.string().min(1, 'Title is required'),
// // })

// // type FormData = z.infer<typeof schema>

// // export default function AlbumForm() {
// //   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
// //     resolver: zodResolver(schema),
// //   })

// //   const onSubmit = (data: FormData) => {
// //     console.log(data)
// //   }

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <TextField label="Album Title" {...register('title')} error={!!errors.title} helperText={errors.title?.message} />
// //       <Button type="submit">Create Album</Button>
// //     </form>
// //   )
// // }
// // src/components/AlbumForm.tsx
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { TextField, Button, Stack } from '@mui/material'
// import { useDispatch } from 'react-redux'
// import { addAlbum } from '../slices/albumSlice'

// const schema = z.object({
//   title: z.string().min(1, 'Album title is required'),
// })

// type FormData = z.infer<typeof schema>

// export default function AlbumForm() {
//   const dispatch = useDispatch()
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   })

//   const onSubmit = (data: FormData) => {
//     dispatch(addAlbum({ title: data.title }))
//     reset()
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Stack spacing={2} sx={{ mt: 2 }}>
//         <TextField label="Album Title" {...register('title')} error={!!errors.title} helperText={errors.title?.message} />
//         <Button type="submit" variant="contained">Create Album</Button>
//       </Stack>
//     </form>
//   )
// }
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addAlbum } from '../slices/albumSlice';

const schema = z.object({
  title: z.string().min(1, 'Album title is required'),
});

type FormData = z.infer<typeof schema>;

export default function AlbumForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(addAlbum({ title: data.title }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <TextField
          label="Album Title"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Create Album
        </Button>
      </Stack>
    </form>
  );
}
