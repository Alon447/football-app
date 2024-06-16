import React from 'react';

type club = {
  points: Number;
  wins: Number;
  draws: Number;
  losses: Number;
  name: String;
};

type LeagueTableProps = {
  clubs: club[];
};
const LeagueTable = ({ clubs }: LeagueTableProps) => {
  return (
    <div>
      <h1>Table</h1>
    </div>
  );
};
