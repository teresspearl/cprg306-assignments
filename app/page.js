import React from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link to="/week-2">Week 2 Assignment</Link>
      </p>
    </main>
  );
}

