import { create } from 'zustand';

type Player = {
  name: string;
  age: Number;
  position: string;
  nationality: string;
  rating: Number;
};

type PlayerState = {
  player: Player;
  setPlayer: (newPlayer: Partial<Player>) => void;
  createPlayer: () => void;
};
const usePlayerStore = create<PlayerState>()((set) => ({
  player: {
    name: '',
    age: 18,
    position: 'Forward',
    nationality: 'Israel',
    rating: 0,
  },
  setPlayer: (newPlayer: Partial<Player>) =>
    set((state) => ({
      player: { ...state.player, ...newPlayer },
    })),
  createPlayer: () => {
    set((state) => {
      const player = state.player;
      const isAnyFieldEmpty = !player.name.trim() || !player.nationality.trim() || !player.position.trim();
      if (isAnyFieldEmpty) {
        alert('Please Fill In All The Fields');
      } else {
        localStorage.setItem('player', JSON.stringify(state.player));
      }

      return state;
    });
  },
}));
export default usePlayerStore;
