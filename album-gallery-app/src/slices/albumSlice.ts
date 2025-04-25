// const albumSlice = createSlice({
//     name: 'albums',
//     initialState,
//     reducers: {
//       addAlbum: (state, action: PayloadAction<{ title: string }>) => {
//         const newAlbum: Album = {
//           id: Date.now().toString(),
//           title: action.payload.title,
//           photos: [],
//         }
//         state.list.push(newAlbum)
//       },
//       selectAlbum: (state, action: PayloadAction<string>) => {
//         state.selectedAlbumId = action.payload
//       },
//       addPhotoToAlbum: (state, action: PayloadAction<{ albumId: string; photo: Photo }>) => {
//         const album = state.list.find((a) => a.id === action.payload.albumId)
//         if (album) {
//           album.photos.push(action.payload.photo)
//         }
//       },
//     },
//   })
  // src/store/albumSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// // Define types
// export interface Photo {
//   id: string
//   url: string
//   // add more fields if needed (e.g., title, description, etc.)
// }

// export interface Album {
//   id: string
//   title: string
//   photos: Photo[]
// }

// export interface AlbumsState {
//   list: Album[]
//   selectedAlbumId: string | null
// }

// // Initial state
// const initialState: AlbumsState = {
//   list: [],
//   selectedAlbumId: null,
// }

// // Create the slice
// const albumSlice = createSlice({
//   name: 'albums',
//   initialState,
//   reducers: {
//     addAlbum: (state, action: PayloadAction<{ title: string }>) => {
//       const newAlbum: Album = {
//         id: Date.now().toString(),
//         title: action.payload.title,
//         photos: [],
//       }
//       state.list.push(newAlbum)
//     },
//     selectAlbum: (state, action: PayloadAction<string>) => {
//       state.selectedAlbumId = action.payload
//     },
//     addPhotoToAlbum: (state, action: PayloadAction<{ albumId: string; photo: Photo }>) => {
//       const album = state.list.find((a) => a.id === action.payload.albumId)
//       if (album) {
//         album.photos.push(action.payload.photo)
//       }
//     },
//   },
// })

// // Export actions and reducer
// export const { addAlbum, selectAlbum, addPhotoToAlbum } = albumSlice.actions
// export default albumSlice.reducer

// src/slices/albumSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photo {
  id: string;
  title: string;
  url: string;
  date: string;
}

interface Album {
  id: string;
  title: string;
  photos: Photo[];
}

interface AlbumsState {
  list: Album[];
  selectedAlbumId: string | null;
}

const initialState: AlbumsState = {
  list: [],
  selectedAlbumId: null,
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbum: (state, action: PayloadAction<{ title: string }>) => {
      const newAlbum: Album = {
        id: Date.now().toString(),
        title: action.payload.title,
        photos: [],
      };
      state.list.push(newAlbum);
    },
    selectAlbum: (state, action: PayloadAction<string>) => {
      state.selectedAlbumId = action.payload;
    },
    addPhotoToAlbum: (state, action: PayloadAction<{ albumId: string; photo: Photo }>) => {
      const album = state.list.find((a) => a.id === action.payload.albumId);
      if (album) {
        album.photos.push(action.payload.photo);
      }
    },
  },
});

export const { addAlbum, selectAlbum, addPhotoToAlbum } = albumSlice.actions;
export default albumSlice.reducer;
