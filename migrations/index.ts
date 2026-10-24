import * as migration_20261024_194704_initial from './20261024_194704_initial';

export const migrations = [
  {
    up: migration_20261024_194704_initial.up,
    down: migration_20261024_194704_initial.down,
    name: '20261024_194704_initial'
  },
];
