import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialNotesState = {
    notes: []
};

const notesSlice = createSlice({
    name: "notes",
    initialState: initialNotesState,
    reducers: {
        fetchNotes(state,action){ 
            state.notes = [...action.payload];
        },
        addNote(state,action){
            state.notes = [action.payload, ...state.notes];
        },
        editNote(){

        },
        deleteNote(state , action){
         state.notes = state.notes.filter( note => note.id !== action.payload);
        }
    }
});

const store = configureStore({
    reducer: {
        notes: notesSlice.reducer
    }
});

export const notesActions = notesSlice.actions;
export default store;