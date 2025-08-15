'use client';


import { useEffect, useState } from 'react';
import BookButton from '../components/BookButton';


export default function HomePage() {


  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to TripBookr</h1>
      <BookButton />
    </main>
    
  );
}
