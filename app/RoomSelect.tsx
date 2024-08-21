import React from 'react';
import Link from 'next/link';
import { Room, Config } from './common_types';

interface RoomSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Config;
}

export default function RoomSelect({ config }: RoomSelectProps) {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onDismiss = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setFocused(false);
    }
  };

  const onRoomClick = (room: Room) => {
    console.log(room);
    history.replaceState({}, '', `/${room.id}`);
    setFocused(false);
  };

  // TODO: Implement a search function
  // TODO: Implement a click handler to pan the map to the selected room
  // TODO: Allow keyboard selection of results

  return <div className={`transition absolute top-0 w-screen ${focused ? 'h-screen bg-white' : 'bg-transparent'}`}  onFocus={onFocus} onClick={onDismiss} >
    <div className="px-4 py-2">
      <input className="p-2 pl-12 border rounded-full w-full" tabIndex={2} type="text" placeholder="Search for a room..."/>
      { focused && <button className="absolute top-2 left-6 pl-1 pr-2 text-3xl cursor-pointer text-slate-700" tabIndex={1} onClick={onDismiss}>&lt;</button>}
    </div>
    <ul className={`px-4 py-2 ${!focused && 'hidden'}`}>
      {config.levels.map(level => level.rooms.map((room, i) => {
        return <li key={room.id}>
          <a className="block p-2 border-b-2 border-slate-100 cursor-pointer hover:bg-slate-100" href={`/${room.id}`} tabIndex={i+3} onClick={e => { e.preventDefault(); onRoomClick(room); }}>
            <p>{room.label}</p>
            {room.aliases && <p className="text-slate-500">{room.aliases.join(', ')}</p>}
          </a>
        </li>;
      }))}
    </ul>
  </div>;
}