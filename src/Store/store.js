import { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [slogans, setSlogans] = useState(sampleSlogans);

  const store = {
    slogans: [slogans, setSlogans],
  };
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const sampleSlogans = [
  {
    id: 1,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 2,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 3,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 4,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 5,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 6,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 7,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 8,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 9,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 2,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 3,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 4,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 5,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 6,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 7,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 8,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 9,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 2,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 3,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 4,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 5,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 6,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 7,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 8,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 9,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 2,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 3,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 4,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 5,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 6,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 7,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 8,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 9,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 2,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 3,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 4,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 5,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 6,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 7,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 8,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 9,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 2,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 3,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 4,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 5,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 6,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 7,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 8,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 9,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 2,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 3,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 4,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 5,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 6,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 7,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 8,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 9,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
  {
    id: 1,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 2,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 3,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 4,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 5,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 6,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 7,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 8,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 9,
    text: 'coziness building for tomorrow ',
  },
  {
    id: 10,
    text: 'There is no Sore it will Not Heal, No cool it will not Subdue.',
  },
];
