// store/useFavoritesStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      addToFavorites: (id: string) => {
        set((state) => {
          if (state.favorites.includes(id)) {
            return state;
          }
          return {
            favorites: [...state.favorites, id],
          };
        });
      },
      
      removeFromFavorites: (id: string) => {
        set((state) => ({
          favorites: state.favorites.filter((favId) => favId !== id),
        }));
      },
      
      toggleFavorite: (id: string) => {
        const { favorites } = get();
        if (favorites.includes(id)) {
          get().removeFromFavorites(id);
        } else {
          get().addToFavorites(id);
        }
      },
      
      isFavorite: (id: string) => {
        return get().favorites.includes(id);
      },
      
      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: 'car-rental-favorites',
      storage: createJSONStorage(() => localStorage),
    }
  )
);